import { css } from '@emotion/react';
import { useContext, useEffect, useState } from 'react';
import { MemberInfoContext } from '@providers/MemberInfoProvider';
import toast from 'react-hot-toast';
import Avatar from '@/components/avatar';
import Button from '@/components/button';
import Container from '@/components/container';
import Modal from '@/components/modal';
import { Heading, Paragraph } from '@/components/text';
import colorTheme from '@/styles/colors';
import Input from '@/components/input';
import Grid from '@/components/grid';
import Spacing from '@/components/spacing';
import { inviteToStudy } from '@/api/invite';

interface InviteToStudyProps {
  open: boolean;
  onClose: () => void;
  // eslint-disable-next-line react/no-unused-prop-types
  copyComplete?: () => void;
  studyId: number;
  studyName: string;
  profileImage?: string;
}

export default function InviteToStudyModal({
  open, onClose, studyId, studyName, profileImage,
}: InviteToStudyProps) {
  const { memberInfo } = useContext(MemberInfoContext);
  const [inviteLink, setInviteLink] = useState('');

  useEffect(() => {
    const fetchInviteLink = async () => {
      try {
        const response = await inviteToStudy(studyId);
        const link = `${import.meta.env.VITE_BASE_URL}/join?study_id=${response.study_id}&token=${response.token}`;
        setInviteLink(link);
      } catch (error) {
        toast.error('초대 링크 생성 실패');
      }
    };

    if (open) {
      fetchInviteLink();
    }
  }, [open, studyId]);

  return (
    <Modal open={open} onClose={onClose} width="447px">
      <Container padding="30px 0" direction="column" align="flex-start">
        <Heading.H3 weight="bold">다른 사람을 스터디에 초대해보세요.</Heading.H3>

        <Container direction="column" gap="6px" cssOverride={css`font-weight: bold`} padding="30px">
          <Avatar size="large" bordered src={profileImage} />
          <Button variant="transparent">Ditto Study</Button>
          <Container direction="column" cssOverride={css`color: ${colorTheme.text.moderate}`}>
            <Paragraph variant="small" weight="regular">
              {memberInfo?.nickname}
              {' '}
              님이
              {' '}
              {studyName}
              에 초대했어요!
            </Paragraph>
            <Paragraph variant="small">아래 링크를 통해 가입해주세요.</Paragraph>
          </Container>
        </Container>

        <Grid columns={1}>
          <Input
            type="text"
            value={inviteLink}
            readOnly
            label="초대 링크"
          />
          <Spacing height={20} />
        </Grid>
      </Container>
    </Modal>
  );
}

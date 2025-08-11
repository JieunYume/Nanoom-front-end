import { DefaultPaddedContainer } from '@components/container/variants';
import { Heading, Paragraph } from '@components/text';
import { useTheme, css } from '@emotion/react';
import Input from '@components/input';
import Button from '@components/button';
import Container from '@components/container';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import routePaths from '@constants/routePaths';
import toast from 'react-hot-toast';
import logo from '@assets/logo.svg';
import EyeIcon from '@assets/icons/eye.svg?react';
import EyeOffIcon from '@assets/icons/eye-off.svg?react';
import Grid from '@components/grid';

function LoginSection() {
  const navigate = useNavigate();
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [showPw, setShowPw] = useState(false);
  const [error, setError] = useState('');
  const theme = useTheme();

  const handleLogin = () => {
    if (id === 'admin' && pw === '1234') {
      toast.success('로그인 성공!');
      navigate(routePaths.MAIN);
    } else {
      setError('일치하는 계정 정보가 존재하지 않습니다.');
    }
  };

  return (
    <Container
      direction="column"
      css={{
        backgroundColor: theme.colors.background.main,
        minHeight: '100vh',
      }}
    >
      <Container direction="column" gap="24px">
        <Heading.H2 weight="bold">로그인</Heading.H2>
        <img src={logo} alt="logo" css={{ width: '200px' }} />
      </Container>

      <Container
        direction="column"
        align="flex-start"
        css={{
          padding: '50px',
          width: '100%',
        }}
      >
        <Paragraph variant="medium">아이디</Paragraph>
        <Input
          placeholder="아이디 입력"
          value={id}
          onChange={(e) => setId(e.target.value)}
          inputMode="text"
          css={inputStyle}
        />
        <Paragraph variant="medium">비밀번호</Paragraph>
        <div css={passwordWrapperStyle}>
          <Input
            placeholder="비밀번호 입력"
            type={showPw ? 'text' : 'password'}
            value={pw}
            onChange={(e) => setPw(e.target.value)}
            css={inputStyle}
          />
          <button
            onClick={() => setShowPw((prev) => !prev)}
            css={eyeBtnStyle}
          >
            {showPw
              ? <EyeOffIcon css={eyeIconStyle} />
              : <EyeIcon css={eyeIconStyle} /> }
          </button>
        </div>

        {error && <p css={errorStyle}>{error}</p>}

        <label css={rememberWrapper}>
          <input type="checkbox" />
          로그인 상태 유지
        </label>

        <Button onClick={handleLogin} css={{ width: '100%' }}>로그인</Button>

        <div css={bottomLinkStyle}>
          <span>회원가입</span>
          <span>이메일 찾기</span>
          <span>비밀번호 찾기</span>
        </div>
      </Container>
    </Container>
  );
}

export default LoginSection;

const inputStyle = css`
  margin-top: 10px;
  margin-bottom: 18px;
  width: 100%;
`;

const passwordWrapperStyle = css`
  position: relative;
  width: 100%;
`;

const eyeBtnStyle = css`
  position: absolute;
  right: 12px;
  top: 30%; // 부모 높이의 절반 지점
  //transform: translateY(-50%); // 아이콘의 절반만큼 위로
  background: none;
  border: none;
  cursor: pointer; // 마우스를 올렸을 때 손가락 커서가 됨
`;

const eyeIconStyle = css`
  width: 20px;
  height: 20px;
  stroke: #888;
`;

const errorStyle = css`
  color: red;
  font-size: 13px;
  margin-bottom: 10px;
`;

const rememberWrapper = css`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 20px;
`;

const bottomLinkStyle = css`
  display: flex;
  justify-content: space-between;
  font-size: 13px;
  color: #888;
  margin-top: 24px;
`;

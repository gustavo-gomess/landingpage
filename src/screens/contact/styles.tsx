import styled from "styled-components";

export const Body = styled.div`
  display: flex;

  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const FirstContent = styled.div`
  padding-left: 240px;
  padding-right: 240px;
  display: flex;
  justify-content: center;
  width: 100%;
  flex-direction: column;
  padding-bottom: 60px;
`;

export const SecondContent = styled.div`
  border-top: 2px solid #1817171d;
  width: 100%;
  padding-left: 240px;
  padding-right: 240px;
  display: flex;
  justify-content: center;
`;

export const CardEmail = styled.div`
  border: 1px solid #ebebeb;
  margin-top: 60px;
  margin-bottom: 60px;
  display: flex;
  flex-direction: column;
  background-color: #f6f6f6;
  border-radius: 12px;
  box-shadow: 6px 6px 20px rgba(0.8, 1, 0.2, 0.1);
  width: 100%;
  height: fit-content;
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 12px;
  justify-content: center;
  padding: 10px 32px;
`;

export const CardTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  border-bottom: 0.5px solid #ebebeb;

  p {
    padding: 18px;
  }
`;

export const CardRow = styled.div`
  display: flex;
  gap: 8px;
  width: 100%;
  padding-bottom: 12px;
  border-bottom: 1px solid #c5c5c5;
  justify-content: flex-start;
`;

export const MessageBox = styled.textarea`
  background-color: #f3f3f3;
  min-height: 200px;
  width: 100%;
  border-radius: 12px;
  resize: none;
  outline: none;
  border: none;
  padding: 24px;
`;

export const ThirdContent = styled.div`
  padding: 40px;
  display: flex;
  gap: 40px;
  justify-content: center;
  padding-left: 240px;
  padding-right: 240px;
`;

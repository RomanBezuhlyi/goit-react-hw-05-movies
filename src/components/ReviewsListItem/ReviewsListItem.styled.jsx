import styled from '@emotion/styled';

export const Card = styled.li`
  display: block;
  padding: 12px;

  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const Article = styled.article`
  display: flex;
  align-items: center;
`;

export const Author = styled.div`
  display: flex;
  align-items: center;
`;

export const AuthorName = styled.h3`
  font-size: 18px;
  font-weight: bold;
`;

export const Text = styled.p`
  font-size: 14px;
`;

export const AvatarHolder = styled.div`
  width: 100px;
  margin-right: 12px;
`;
export const Avatar = styled.img`
  display: block;
  width: 100%;
  object-fit: cover;
`;

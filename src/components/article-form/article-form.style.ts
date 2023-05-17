import { styled } from '@mui/system';

type ArticleFormStylesType = {
hasTags?: boolean;
};

export const ArticleFormStyle = styled('div')<ArticleFormStylesType>`
position: relative;
background: #FFFFFF;
border: 1px solid #D9D9D9;
box-shadow: 0px 22px 106px rgba(0, 0, 0, 0.07), 0px 9.19107px 44.2843px rgba(0, 0, 0, 0.0503198), 0px 4.91399px 23.6765px rgba(0, 0, 0, 0.0417275), 0px 2.75474px 13.2728px rgba(0, 0, 0, 0.035), 0px 1.46302px 7.04911px rgba(0, 0, 0, 0.0282725), 0px 0.608796px 2.93329px rgba(0, 0, 0, 0.0196802);
border-radius: 6px;
padding: 48px 32px;
width: 100%;
box-sizing: border-box;
min-height: fit-content;
display: flex;
flex-direction: column;

.title {
font: normal 500 20px;
line-height: 28px;
text-align: center;
color: rgba(0, 0, 0, 0.75);
margin: 0 0 0 0;
}

.fontSubmit {
  width: 320px;
  box-sizing: border-box;
  background-color: #1890FF;
  border-radius: 4px;
  padding: 8px 12px;
  border: 1px solid #1890FF;
  color: #FFFFFF;
  cursor: pointer;
  margin-top: ${({ hasTags }) => (hasTags ? '10px' : '9px')};
  &:hover,
  &:focus {
    background-color: #FFFFFF;
    color: #1890FF;
  }
}


.inputText {
  height: 168px;
}
`;


export const ArticleFormTagsStyle = styled('div')<ArticleFormStylesType>`
margin-top: 21px;
position: relative;
width: fit-content;
height: fit-content;

.tagWrapper {
  display: grid;
  grid-template-columns: 300px 120px;
  align-items: start;
  gap: 18px;
}

.label {
  font: normal 400 14px;
  line-height: 22px;
  color: rgba(0, 0, 0, 0.75);
}

.tags {
  margin-top: 10px;
}

.addButtonWrapper {
  position: relative;
  left: ${({ hasTags }) => (hasTags ? '450px' : 'auto')};
  bottom: ${({ hasTags }) => (hasTags ? '38px' : 'auto')};
  width: fit-content;
  text-transform: none;
  border: 1px solid #1890FF;
  color: #1890FF;
}

.error {
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: #F5222D;
}

`;

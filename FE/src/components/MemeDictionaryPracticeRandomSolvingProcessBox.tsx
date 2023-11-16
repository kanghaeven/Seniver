import { useState, useEffect } from "react";
import styled from "styled-components";
import MemeDictionaryPracticeRandomSolvingList from "./MemeDictionaryPracticeRandomSolvingList";
// import { memeMineCurrentPracticeState } from "../states/useMeme";
// import { useRecoilState,useSetRecoilState } from "recoil";
import posefileformbutton from "./../assets/images/posefileformbutton.png"


const MemeDictionaryPracticeWraaper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
// case 0
const MemeDictionaryPracticeText = styled.div`
  display: flex;
  font-family: "NanumSquareNeoBold";
  font-size: 36px;
  text-align: center;
  justify-content: center;
  align-items: center;
  user-select: none;
`
const MemeDictionaryPracticeStartText = styled.div`
  display: flex;
  font-family: "NanumSquareNeoExtraBold";
  font-size: 40px;
  text-align: center;
  justify-content: center;
  align-items: center;
  user-select: none;
  color: var(--white);
  margin-top: 100px;
`

const MemeDictionaryPracticeTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const MemeDictionaryPracticeHeader = styled.div`
  display: flex;
  font-family: "NanumSquareNeoHeavy";
  font-size: 50px;
  text-align: center;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
  user-select: none;

`
const LockedNextButton = styled.div`
  margin-top: 60px;
  width: 550px;
  height: 80px;
  background: #bcbcbc;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const NextButton = styled.div`
  margin-top: 60px;
  width: 550px;
  height: 80px;
  background: #2e2e2e;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    border: 2px solid transparent;
    padding: 5px;
    background: linear-gradient(97.76deg, #3fd5de 3.15%, #2deea8 76.87%) transparent;
  }
  &:active {
    border: 3px solid rgba(0, 0, 0, 0.3);
  }
`;

const NextButtonText = styled.div`
  user-select: none;
  border-radius: 30px;
  text-align: center;
  font-family: "NanumSquareNeoBold";
  font-size: 44px;
  color: #ffffff;
`;

/// case 1
const MemeDictionaryPracticeInfoWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const MemeDictionaryPracticeInfoBox = styled.div`
  width: 900px;
  height: 800px;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--decogradient01);
  margin-bottom: 130px;
  transition: all 0.15s ease;
  cursor: pointer;
  &:hover {
    border: 2px solid transparent;
    background: linear-gradient(97.76deg, #3fd5de 3.15%, #2deea8 76.87%) transparent;
    opacity: 0.5;
    border-radius: 30%;

  }
  &:active {
    border: 3px solid rgba(0, 0, 0, 0.3);
    border-radius: 30px;

  }
`

const MemeDictionaryPracticeOptionsInput = styled.div<{ isSelected: boolean }>`
  width: 980px;
  height: 60px;
  font-family: "NanumSquareNeoBold";
  font-size: 28px;
  border: 1px solid var(--dark10);
  border-radius: 20px;
  padding: 15px;
  background: ${props => props.isSelected ? 'var(--maingradient)' : 'white'};
`
const MemeDictionaryPracticeOptionsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`
const ProblemEditorLabel = styled.label`
`
const MemeDictionaryPracticeFileFormArea = styled.div`
  margin-top: 20px;
  width: 1100px;
  height: 500px;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--gray03);
  margin-bottom: 50px;
  overflow: hidden;

`
const MemeDictionaryPracticeOptionsCircle = styled.div<{ isSelected: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "NanumSquareNeoHeavy";
  text-align: center;
  font-size: 28px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  padding: 10px;
  border: ${props => props.isSelected ? '4px solid var(--aqua)' : '4px solid red;'};
  margin-right: 10px;
  cursor: pointer;
`
const MemeDictionaryPracticeProblemExplanatioInput = styled.div`
  width: 1100px;
  height: 60px;
  text-align: center;
  font-family: "NanumSquareNeoExtraBold";
  font-size: 32px;
  border-radius: 20px;
  padding: 15px;
  margin-bottom: 20px;
`
const MemeDictionaryPracticeFileFormImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`
//case2
const MemeDictionaryPracticeCompletedProblem = styled.div`
display: flex;
font-family: "NanumSquareNeoExtraBold";
font-size: 62px;
text-align: center;
justify-content: center;
align-items: center;
color : var(--emerald);
margin-bottom: 100px;
`

function MemeDictionaryPracticeRandomSolvingProcessBox({useYear}:{useYear:number}) {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [completed, setCompleted] = useState(true); 
  const [currentStep, setCurrentStep] = useState(1); 
  const [newProblem, setProblem] = useState({
      title: "",
      image: "",
      answer: 0,
      review: "",
      problemExplanation: "",
      useYear: useYear,
      word: "",
      tags: [""],
      choices: [
        {
          choiceId: 0,
          choiceNum: 0,
          content: ""
        },
        {
          choiceId: 1,
          choiceNum: 1,
          content: ""
        },
        {
          choiceId: 2,
          choiceNum: 2,
          content: ""
        }
      ]
    });
 
  const handleSubmit= (e:any)=>{
      e.preventDefault();
      setCurrentStep(2);
    }
  
  useEffect(()=>{
    window.scrollTo(0, 0);
  },[currentStep])

  switch (currentStep) {
  case 0:
    return (
      <MemeDictionaryPracticeWraaper> 
        <MemeDictionaryPracticeInfoWrapper>
          <MemeDictionaryPracticeInfoBox>
          <MemeDictionaryPracticeTextWrapper>
          <MemeDictionaryPracticeHeader>문제 랜덤 풀이</MemeDictionaryPracticeHeader>
          <MemeDictionaryPracticeText>선택하신 연도의 단어 문제가 무작위로 출제됩니다.</MemeDictionaryPracticeText>
          <MemeDictionaryPracticeText>문제풀이는 총 1세트 1문제로 진행됩니다.</MemeDictionaryPracticeText>
          <MemeDictionaryPracticeText>제시된 문제와 그림을 잘 보고, </MemeDictionaryPracticeText>
          <MemeDictionaryPracticeText>가장 적절한 답을 골라주세요.</MemeDictionaryPracticeText>
          <MemeDictionaryPracticeStartText>준비가 됐으면 눌러주세요!</MemeDictionaryPracticeStartText>
          </MemeDictionaryPracticeTextWrapper>
          </MemeDictionaryPracticeInfoBox>
        </MemeDictionaryPracticeInfoWrapper>
      </MemeDictionaryPracticeWraaper>
    )
    case 1:
      return (
        <MemeDictionaryPracticeWraaper>
          <MemeDictionaryPracticeRandomSolvingList useYear={useYear}></MemeDictionaryPracticeRandomSolvingList>
        </MemeDictionaryPracticeWraaper>
      )
    default:
      break;
    }
}
export default MemeDictionaryPracticeRandomSolvingProcessBox;
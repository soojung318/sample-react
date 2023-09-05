import RadioGroup from "./RadioGroup";
import Radio from "./Radio";
import React, {useState} from 'react'; // eslint-disable-line no-unused-vars
 function App() { // eslint-disable-line no-unused-vars
    return (

        <form
            onSubmit={(e) => {
                e.preventDefault();
                alert(`${e.target.contact.value}를 통해 연락드리겠습니다!`);
            }}
        >
            <RadioGroup>
                <Radio name="contact" value="EMAIL" defaultChecked>
                    이메일
                </Radio>
                <Radio name="contact" value="PHONE">
                    전화
                </Radio>
                <Radio name="contact" value="FAX">
                    팩스
                </Radio>
                <Radio name="contact" value="MAIL" disabled>
                    우편
                </Radio>
            </RadioGroup>
            <button>제출</button>
        </form>
    );
}
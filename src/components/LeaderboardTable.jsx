
const data = [
    {
        name: "Revival Philip",
        avatar: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
        track: "Frontend",
        grade: 90
    },
    {
        name: "Habiba Shehu",
        avatar: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
        track: "Backend",
        grade: 81
    },
    {
        name: "Timilehn Babatola",
        avatar: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
        track: "Frontend",
        grade: 72
    },
    {
        name: "Taofeek Sikiru",
        avatar: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
        track: "Product Design",
        grade: 53
    },
     {
        name: "Chidinma Eze",
        avatar: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
        track: "Backend",
        grade: 86
    },
    {
        name: "Chukwuebuka Edward",
        avatar: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
        track: "Frontend",
        grade: 99
    },
    {
        name: "Agemo Lekan",
        avatar: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
        track: "Product Design",
        grade: 88
    },
    {
        name: "Israel Moses",
        avatar: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
        track: "Backend",
        grade: 100
    },
{
    name: "Ikechukwu Mba",
        avatar: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
        track: "Frontend",
        grade: 70
},
{name: "Powei Thomas",
        avatar: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
        track: "Backend",
        grade: 88
},
{
    name: "Chizoba Ogbu",
        avatar: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
        track: "Product Design",
        grade: 50
},
{
    name: "Bendict Obanla",
        avatar: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
        track: "Backend",
        grade: 98
},
{
    name: "Gladys Olagunju",
        avatar: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
        track: "Frontend",
        grade: 95
},
{
    name: "Daniel James",
        avatar: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
        track: "Frontend",
        grade: 70
},
{
    name: "Frank Itobe",
        avatar: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
        track: "Backend",
        grade: 90
},
{
    name: "Galma Mubarak",
        avatar: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
        track: " Product Design",
        grade: 45
},
{
    name: "Ayobami Olowo",
        avatar: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
        track: "Frontend",
        grade: 50
},
{
    name: "Folakemi Kunuji",
        avatar: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
        track: "Backend",
        grade: 86
},
{
    name: "Ruth Japeth",
        avatar: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
        track: "Frontend",
        grade: 97
},
{
    name: "Elizabeth Adekunle",
        avatar: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
        track: "Product Design",
        grade: 82
}
    
]

const LeaderboardTable=()=>{
    return(
        <div>
            <p>Below is the list of students and their grades for the week</p>
            <label htmlFor="">sort by grades</label>
            <select name="" id="">
                <option value="highest">Highest</option>
                <option value="lowest">Lowest</option>
            </select>
            
            <table>
                <tr>
                    <th>Avatar</th>
                    <th>Name</th>
                    <th>Track</th>
                    <th> Overall Grade</th>
                </tr>
                {data.map((student, index) => (
                    <tr key={index}>
                        <td>
                            <img src={student.avatar} alt={`${student.name} image`} />
                        </td>
                        <td>
                            {student.name}
                        </td>
                        <td>{student.track}</td> 
                        <td>{student.grade}</td> 

                    </tr>
                ))}
            </table>
        </div>
    )
}
export default LeaderboardTable
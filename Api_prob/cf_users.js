const axios = require('axios').default;


const users = ["Kira_1234", "KDVinit"];

const sendGetRequest = async (user) => {
    try {
        const res = await axios.get(`https://codeforces.com/api/user.status?handle=${user}&count=1000`);
        let d = new Date(), d1 = new Date();
        d.setDate(d.getDate() - 10);
        let startDate = Math.floor(d1.getTime() / 1000), endDate = Math.floor(d.getTime() / 1000);  //Time period,(hard-coded just for showing the working)
        let result = res.data.result.filter((res) => (res.verdict === 'OK' && res.creationTimeSeconds <= startDate && res.creationTimeSeconds >= endDate));
        let count = 0;
        let tags = [];
        for (let res of result) {
            count++;
            tags = [tags, ...res.problem.tags];
        }
        const maxTag = tags.reduce((previous, current, i, arr) =>
            arr.filter(item => item === previous).length >
                arr.filter(item => item === current).length
                ? previous
                : current
        );
        console.log(user)
        console.log("Total problems solved: " + count);
        console.log("Most solved Tag: " + maxTag);
        console.log("\n");
    } catch (err) {
        // Handle Error Here
        console.error(err);
    }
};

for (let user of users) {
    sendGetRequest(user);

}

// 
// for (let user of users) {
//     axios.get(`https://codeforces.com/api/user.status?handle=${user}&count=1000`)
//         .then(function (response) {
//             // handle success
//             let d = new Date(), d1 = new Date();
//             d.setDate(d.getDate() - 10);
//             let startDate = Math.floor(d1.getTime() / 1000), endDate = Math.floor(d.getTime() / 1000);  //Time period,(hard-coded just for showing the working)
//             let result = response.data.result.filter((res) => (res.verdict === 'OK' && res.creationTimeSeconds <= startDate && res.creationTimeSeconds >= endDate));
//             let count = 0;
//             let tags = [];
//             for (let res of result) {
//                 count++;
//                 tags = [tags, ...res.problem.tags];
//             }
//             const maxTag = tags.reduce((previous, current, i, arr) =>
//                 arr.filter(item => item === previous).length >
//                     arr.filter(item => item === current).length
//                     ? previous
//                     : current
//             );
//             console.log(user)
//             console.log("Total problems solved: " + count);
//             console.log("Most solved Tag: " + maxTag);
//             console.log("\n");

//         })
//         .catch(function (error) {
//             // handle error
//             console.log("Error" + error);
//         })
// }

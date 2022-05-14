const axios = require('axios').default;


const users = ["Kira_1234", "KDVinit"];

const sendGetRequest = async (user) => {
    try {
        const res = await axios.get(`https://codeforces.com/api/user.status?handle=${user}`);
        let d = new Date(), d1 = new Date();
        d.setDate(d.getDate() - 10);
        let startDate = Math.floor(d1.getTime() / 1000), endDate = Math.floor(d.getTime() / 1000);  //Time period,(hard-coded just for showing the working)
        let result = res.data.result.filter((res) => (res.verdict === 'OK' && res.creationTimeSeconds <= startDate && res.creationTimeSeconds >= endDate));
        let count = 0;
        let tags = {};
        for (let res of result) {
            count++;
            for (let tag of res.problem.tags) {
                 if (tags[tag] == null) {
                 tags[tag] = 1;
                } else {
                    tags[tag]++;
                  }
            }
           
        }
        let mostTag=Object.entries(tags);
        mostTag = (mostTag).sort(([,a],[,b]) => b-a)
        
        console.log(user)
        console.log("Total problems solved: " + count);
        console.log("Most solved Tag: ");
        count=mostTag[0][1]
        for(let x of mostTag)
        {
            if(count===x[1])
            {
                console.log(x[0]);
            }
        }
        console.log("\n");
    } catch (err) {
        // Handle Error Here
        console.error(err);
    }
};

for (let user of users) {
    sendGetRequest(user);

}


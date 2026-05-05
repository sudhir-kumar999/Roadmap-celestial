for (let i = 0; i < readData.length; i++) {
            if (!(readData[i].email == bodyData.email)) {
              readData.push(bodyData);
              writeData.write(JSON.stringify(readData));
              writeData.end();
              console.log("data appended");
            } else {
              return res.json({
                success: false,
                message: "give unique email",
              });
            }
          }
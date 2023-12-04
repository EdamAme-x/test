async function gitter() {

    const newJSON = {
        "time": Date.now()
    }

    const encoder = new TextEncoder();
    const contentBytes = encoder.encode(JSON.stringify(newJSON));

    await Deno.writeFileSync("commit.json", contentBytes);
    
    console.log("gitter: " + num);
    await Deno.run({
        cmd: ["git", "add", "."],
    });

    setTimeout(async () => {
        await Deno.run({
            cmd: ["git", "commit", "-m", "Commit:" + num],
        })

        setTimeout(async () => {
            await Deno.run({
                cmd: ["git", "push"]
            })
        }, 2500)
    }, 2500)

    num++;
}

let num = 0;

gitter();
setInterval(gitter, 12000)
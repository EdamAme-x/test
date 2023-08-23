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

    await Deno.run({
        cmd: ["git", "commit", "-m", "Commit!"],
    })

    await Deno.run({
        cmd: ["git", "push"]
    })

    num++;
}

let num = 0;

gitter();
setInterval(gitter, 10000)
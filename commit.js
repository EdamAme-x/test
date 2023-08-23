async function gitter() {

    const nowJSON = Deno.readFileSync("commit.json");

    const newJSON = {
        "num": JSON.parse(nowJSON).num + 1
    }

    Deno.writeFileSync("commit.json", JSON.stringify(newJSON));
    
    await Deno.run({
        cmd: ["git", "add", "."],
    });

    await Deno.run({
        cmd: ["git", "commit", "-m", "Commit!"],
    })

    await Deno.run({
        cmd: ["git", "push"]
    })
}

setInterval(gitter, 10000)
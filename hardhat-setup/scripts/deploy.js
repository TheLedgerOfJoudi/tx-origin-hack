const { ethers } = require('hardhat')

deploy = async () => {
    let Vulnerable, vulnerable, Attack, attack, signers, Alice, Bob, overrides

    signers = await ethers.getSigners()
    Alice = signers[0]
    Bob = signers[1]

    console.log("I am poor Alice and I am deploying my vulnerable contract:")
    Vulnerable = await ethers.getContractFactory("Vulnerable")
    overrides = {
        value: ethers.utils.parseEther("0.000000001")
    }
    vulnerable = await Vulnerable.deploy(overrides)
    console.log("The vulnerable contract was deployed to " + vulnerable.address)
    console.log("-----------------------------------------------")

    console.log("I am malicious Bob and I am deploying my attack contract:")
    Attack = await ethers.getContractFactory("Attack")
    attack = await Attack.connect(Bob).deploy(vulnerable.address)
    console.log("The attack contract was deployed to " + attack.address)
    console.log("-----------------------------------------------")

}
deploy()
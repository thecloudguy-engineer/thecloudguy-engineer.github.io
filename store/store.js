const myNum = document.getElementById('takeNumber');

        const connectButton = document.querySelector('#connectButton');
        connectButton.addEventListener('click', connect);

        const setButton = document.querySelector('#set');
        setButton.addEventListener('click', set);

        const getButton = document.querySelector('#get');
        getButton.addEventListener('click', get);

        const getNumber = document.getElementById('getNumber');
        const setNumber = document.getElementById('setNumber');

       
        const contractAddress = '0xaa493310e851d77e1bf565fefa9643db8170a92a';
        
        const abi = storeABI;
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();

        const contract = new ethers.Contract(contractAddress, abi, signer);




        async function connect() {
            if (typeof window.ethereum !== 'undefined') {
                console.log("We see metamask");
                ethereum.request({ method: "eth_requestAccounts" });
                connectButton.textContent = 'Connected';
            }
        }

        async function get() {
            try {
                const getNum = await contract.favoriteNumber();
                console.log(getNum);

                getNumber.textContent = 'The number is ' + getNum;

            } catch (error) {
                console.log(error)

            }
        }

        get();


        async function set() {
            try {

                const setNum = await contract.store(Number(myNum.value));
                await setNum.wait();
                const newNum = await contract.favoriteNumber();
                setNumber.textContent = 'My Number is: ' + newNum;

            } catch (error) {
                console.log(error);

            }

        }
const display = document.getElementById('display');
        const startBtn = document.getElementById('startBtn');
        const stopBtn = document.getElementById('stopBtn');
        const resetBtn = document.getElementById('resetBtn');

        let seconds = 0;
        let minutes = 0;
        let interval;

        function pad(time) {
            return time < 10 ? `0${time}` : time;
        }

        function updateDisplay() {
            display.textContent = `${pad(minutes)}:${pad(seconds)}`;
        }

        function start() {
            clearInterval(interval);
            interval = setInterval(() => {
                seconds++;
                if (seconds === 60) {
                    seconds = 0;
                    minutes++;
                }
                updateDisplay();
            }, 1000);
        }

        function stop() {
            clearInterval(interval);
        }

        function reset() {
            stop();
            seconds = 0;
            minutes = 0;
            updateDisplay();
        }

        startBtn.addEventListener('click', start);
        stopBtn.addEventListener('click', stop);
        resetBtn.addEventListener('click', reset);
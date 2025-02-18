export const useButtonHandler = () => {
    let moves: string[] = ["ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"];

    // wyłączenie scrolla na strzałkach
    window.addEventListener("keydown", function (e) {
        if (
            ["Space", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"]
                .indexOf(e.code) > -1
        ) {
            e.preventDefault();
        }
    }, false);

    document.addEventListener("keydown", function (e) {
        if (moves.includes(e.key)) {
        }
    });
};

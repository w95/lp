import { useEffect, useState } from "react";
import TextTransition, { presets } from "react-text-transition";
import ButtonCircle from "@/components/ButtonCircle";
import cn from "classnames";
import styles from "./Main.module.sass";

const TEXTS = ["changing.", "moving.", "pushing.", "shaping."];

type MainProps = {
    scrollToRef: any;
};

const Main = ({ scrollToRef }: MainProps) => {
    const [index, setIndex] = useState<number>(0);

    useEffect(() => {
        const intervalId = setInterval(
            () => setIndex((index) => index + 1),
            2000
        );
        return () => clearTimeout(intervalId);
    }, []);

    return (
        <div className={cn("section-main section-brown", styles.section)}>
            <div className={cn("container", styles.container)}>
                <div className={styles.wrap}>
                    <div className={cn("h1", styles.title)}>
                        Keep
                        <div className={styles.word}>
                            <TextTransition springConfig={presets.slow} inline>
                                {TEXTS[index % TEXTS.length]}
                            </TextTransition>
                        </div>
                    </div>
                    <div className={styles.info}>
                        We are a team of branding experts, marketing
                        strategists, digital traders, designers, and growth
                        programmers. We use the strength of human psychology and
                        our understanding of digital landscapes to help
                        businesses attract customers.
                    </div>
                </div>
                <div className={styles.actions}>
                    <ButtonCircle
                        className={styles.button}
                        icon="arrow-up-right"
                        image="/images/get-in-touch.svg"
                        href="/contact"
                    />
                    <button
                        className={styles.scroll}
                        onClick={() =>
                            scrollToRef.current.scrollIntoView({
                                behavior: "smooth",
                            })
                        }
                    >
                        DISCOVER MORE
                        <span className={styles.mouse}>
                            <span className={styles.line}></span>
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Main;

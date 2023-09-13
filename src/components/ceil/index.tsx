import styles from '@/styles/Ceil.module.css';

interface CeilProps {
    hour: string
    color: string
}

export default function Ceil(props: CeilProps) {
    return (
        <div className={styles.container} style={{backgroundColor: `${props.color}`}}>
            <span className={styles.text}>{props.hour}</span>
        </div>
    )
}
import styles from './todo-icon.module.css';

export default function TodoIcon({ numberOfTodos }: { numberOfTodos?: number }) {
    return (
        <span className={styles.icon}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="100%" height="100%" viewBox="0 0 158 158">
                <path stroke="currentColor" strokeMiterlimit="10" strokeWidth="4" d="M23.3 69h89.8M23.3 49.3h89.8m23.3 39.2V16.9H2.3v107.2H27l13.7 13.7 27.6-27.6h18.2"></path>
                <path stroke="currentColor" strokeWidth="4" d="M121 152.8c19.1 0 34.7-15.4 34.7-34.3S140.1 84.2 121 84.2s-34.7 15.4-34.7 34.3 15.6 34.3 34.7 34.3Z"></path>
                <path stroke="currentColor" strokeMiterlimit="10" strokeWidth="4" d="M129.5 98.5 118.6 120l21 9.5"></path>
                <path stroke="currentColor" strokeWidth="4" d="M35.3 3.2v23.6m67.5-23.6v23.6"></path>
                {numberOfTodos && numberOfTodos > 0 && (<>
                    <circle r="30" cx="127" cy="35" fill="currentColor" />
                    <text x="127" y="48" textAnchor="middle" fontSize="45" fill="#ff5546" fontWeight="bold">{numberOfTodos}</text>
                </>
                )}
            </svg>
        </span>
    )
}
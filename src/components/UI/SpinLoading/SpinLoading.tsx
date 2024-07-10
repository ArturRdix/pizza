import './SpinLoading.scss';
import { ThreeCircles } from 'react-loader-spinner';

const SpinLoading = () => {
    return (
        <div className='spin-wrapper'>
            <ThreeCircles
                visible={true}
                height="100"
                width="100"
                color="#ffa91f"
                ariaLabel="three-circles-loading"
                wrapperStyle={{}}
                wrapperClass=""
            />
            <h2>Завантаження</h2>
        </div>
    );
}

export default SpinLoading;
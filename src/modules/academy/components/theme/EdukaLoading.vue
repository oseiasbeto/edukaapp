<template>
    <div class="eduka-loading">
        <div class="eduka-loading__icon">
            <div class="eduka-loading__activity"></div>
            <div class="eduka-loading__activity eduka-loading__activity--revert"></div>
            <div class="eduka-loading__fire">
                <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="100%" viewBox="0 0 1664.000000 458.000000"
                    preserveAspectRatio="xMidYMid meet">
                    <g transform="translate(0.000000,458.000000) scale(0.100000,-0.100000)" fill="currentColor"
                        stroke="none">
                        <path
                            d="M1898 3964 c-3 -3 -92 -12 -197 -20 -185 -14 -193 -15 -249 -46 -51 -30 -65 -33 -137 -33 -53 0 -91 6 -112 16 l-31 17 -19 -41 c-25 -57 -59 -95 -98 -112 -46 -19 -65 -53 -75 -132 -9 -69 -31 -103 -67 -103 -24 0 -121 -99 -154 -159 -18 -31 -58 -85 -90 -120 -33 -35 -59 -73 -59 -83 0 -11 15 -46 32 -78 30 -54 32 -61 20 -92 -6 -19 -12 -50 -12 -70 0 -21 -10 -50 -25 -72 -13 -20 -21 -36 -16 -36 15 0 31 -52 26 -84 -6 -28 -3 -33 30 -50 48 -26 123 -108 130 -143 12 -51 26 -70 83 -104 30 -19 80 -56 109 -83 l53 -49 42 16 c71 26 113 30 203 16 l84 -12 85 41 c52 26 99 42 121 42 64 0 149 -47 138 -76 -4 -11 6 -14 47 -14 64 0 116 -23 135 -61 21 -40 19 -68 -10 -125 -14 -27 -25 -57 -25 -67 0 -39 30 -76 85 -102 56 -28 59 -32 55 -73 -1 -13 10 -42 25 -64 16 -24 31 -65 36 -101 6 -34 14 -76 20 -93 17 -57 10 -98 -31 -179 -22 -43 -40 -90 -40 -104 0 -50 31 -156 82 -280 28 -69 59 -159 69 -199 10 -40 46 -125 79 -190 48 -93 63 -134 74 -201 10 -64 19 -89 35 -102 33 -27 100 -33 155 -15 26 9 79 16 120 16 97 0 114 12 324 242 47 51 52 61 52 103 0 64 21 98 74 124 25 11 50 21 56 21 18 0 31 41 24 73 -3 18 -18 54 -31 81 l-25 48 48 69 c49 71 80 96 183 148 34 18 65 39 68 47 3 9 -1 39 -10 68 -10 33 -14 70 -10 103 4 36 0 65 -11 93 -9 22 -16 55 -16 74 0 18 -9 54 -21 80 -24 56 -22 66 39 166 68 111 97 143 202 224 133 102 217 195 262 286 37 76 68 169 68 202 0 25 -40 24 -82 -2 -28 -17 -51 -20 -139 -20 -94 0 -110 3 -140 23 -25 17 -37 34 -44 66 -9 34 -21 50 -57 77 -26 18 -59 55 -74 81 -15 26 -51 71 -79 98 -46 45 -53 57 -65 115 -21 105 -57 199 -111 292 -36 62 -56 113 -71 175 -11 49 -22 93 -24 100 -2 8 -22 12 -56 11 -105 -2 -262 24 -386 63 -135 43 -155 42 -167 -10 -8 -39 -55 -83 -75 -71 -8 5 -35 10 -58 10 -35 0 -52 7 -85 35 -46 40 -132 75 -182 75 -18 0 -41 7 -49 16 -17 16 -16 23 13 123 l17 56 -33 22 c-35 24 -46 27 -55 17z">
                        </path>
                    </g>
                </svg>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "EdukaLoading"
}
</script>

<style scoped>
.eduka-loading,
.eduka-loading__icon {
    position: relative;
}

.eduka-loading .eduka-loading__activity {
    -webkit-animation: spin .5s linear 0s infinite;
    animation: spin .5s linear 0s infinite;
    border: 1px solid transparent;
    border-left-color: #c9ced4;
    border-radius: 100%;
    border-top-color: #c9ced4;
    display: block;
    height: 50px;
    margin: 0 auto;
    position: relative;
    width: 50px;
}

.eduka-loading .eduka-loading__activity--revert {
    -webkit-animation: spin-revert .75s linear 0s infinite;
    animation: spin-revert .75s linear 0s infinite;
    border-left-color: #c9ced4;
    border-top-color: #c9ced4;
    height: 40px;
    left: 50%;
    margin-left: -20px;
    margin-top: -20px;
    position: absolute;
    top: 50%;
    width: 40px;
}

.eduka-loading__fire svg {
    left: 50%;
    margin-left: -13px;
    margin-top: -12px;
    position: absolute;
    top: 50%;
    width: 100px;
    color: #c9ced4;
}

@keyframes spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }

    100% {
        -webkit-transform: rotate(1turn);
        transform: rotate(1turn);
    }
}

@keyframes spin-revert {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }

    100% {
        -webkit-transform: rotate(-1turn);
        transform: rotate(-1turn);
    }
}
</style>
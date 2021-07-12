import React from 'react';
import Anime from 'react-anime';
import './AddPage.css';
import Select from 'react-select';
import DropdownSelect from '../../Components/DropdownSelect/DropdownSelect';
import { IconContext } from 'react-icons';
import { AiOutlinePlus } from 'react-icons/ai';

const AddPage = () =>{

    return (
        <div className="add-page-main-wrapper">
            
            <div className="add-page-wrapper">
            
                <div className="add-page">
                
                    <p className="create-page-head">Add a task!</p>

                    <div className="todo-create-illustrtation">
                        <svg id="bb7c18d0-f456-47c2-8887-908615fa7d6e" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="1005.56255" height="548.69495" viewBox="0 0 1005.56255 548.69495"><path d="M970.1131,720.7499c.096-.28809,9.41382-29.11865-7.07739-54.84473l-1.6836,1.0791c15.96338,24.90332,6.9563,52.8545,6.86353,53.13379Z" transform="translate(-97.21873 -175.65252)" fill="#e4e4e4"/><path d="M951.24342,669.60483a13.11313,13.11313,0,1,0,25.66181-5.41187c-1.49445-7.08631-14.16421-24.72239-21.25053-23.22794S949.749,662.51852,951.24342,669.60483Z" transform="translate(-97.21873 -175.65252)" fill="#e4e4e4"/><path d="M953.63276,702.748c6.32428,6.83412,17.63826,6.64871,17.63826,6.64871s1.06029-11.26571-5.264-18.09983-17.63825-6.64871-17.63825-6.64871S947.30848,695.91386,953.63276,702.748Z" transform="translate(-97.21873 -175.65252)" fill="#e4e4e4"/><path d="M1049.48888,722.7499c.22642-.67986,22.2159-68.71783-16.70212-129.42943l-3.97315,2.5466c37.67237,58.77,16.41634,124.73262,16.1974,125.39174Z" transform="translate(-97.21873 -175.65252)" fill="#e4e4e4"/><path d="M1004.95786,602.05139a30.946,30.946,0,0,0,60.55993-12.77162c-3.52678-16.72316-33.42648-58.343-50.14964-54.81618S1001.43107,585.32822,1004.95786,602.05139Z" transform="translate(-97.21873 -175.65252)" fill="#e4e4e4"/><path d="M1010.59652,680.26672c14.92482,16.128,41.625,15.69046,41.625,15.69046s2.50221-26.58623-12.42261-42.71424-41.625-15.69046-41.625-15.69046S995.67169,664.13871,1010.59652,680.26672Z" transform="translate(-97.21873 -175.65252)" fill="#e4e4e4"/><path d="M677.31479,717.62706l-14.5923-6.1443-10.01026-73.15138H519.40762L508.55725,711.1839l-13.05512,6.52746a3.10016,3.10016,0,0,0,1.38657,5.873H676.11213A3.1,3.1,0,0,0,677.31479,717.62706Z" transform="translate(-97.21873 -175.65252)" fill="#e6e6e6"/><path d="M914.20621,648.06385H259.377a12.97344,12.97344,0,0,1-12.9443-12.97332V542.751h680.7178v92.33952A12.97356,12.97356,0,0,1,914.20621,648.06385Z" transform="translate(-97.21873 -175.65252)" fill="#ccc"/><path d="M927.835,586.39288h-682V191.29161a15.6572,15.6572,0,0,1,15.63964-15.63909H912.1952A15.65735,15.65735,0,0,1,927.835,191.29161Z" transform="translate(-97.21873 -175.65252)" fill="#3f3d56"/><path d="M887.106,204.32813h-600.54a12.06487,12.06487,0,0,0-12.0498,12.06v329.27a12.06487,12.06487,0,0,0,12.0498,12.06h600.54a12.07157,12.07157,0,0,0,12.05029-12.06v-329.27A12.07157,12.07157,0,0,0,887.106,204.32813Z" transform="translate(-97.21873 -175.65252)" fill="#fff"/><path d="M393.01613,204.32813v353.39H286.56593a12.06487,12.06487,0,0,1-12.0498-12.06v-329.27a12.06487,12.06487,0,0,1,12.0498-12.06Z" transform="translate(-97.21873 -175.65252)" fill="#f0f0f0"/><path d="M305.19648,382.84914a8.40614,8.40614,0,0,0-10.26268,7.799l-28.6532,8.44748,11.86177,10.01357,25.391-9.55705a8.45167,8.45167,0,0,0,1.66308-16.703Z" transform="translate(-97.21873 -175.65252)" fill="#ffb6b6"/><path d="M189.42383,446.42383a11.952,11.952,0,0,1-3.80811-23.27588l58.064-19.6001,45.29248-16.5,5.5581,19.45508-39.98388,26.34668-62.62354,13.311A12.02473,12.02473,0,0,1,189.42383,446.42383Z" transform="translate(-97.21873 -175.65252)" fill="#00c7ff"/><polygon points="128.541 538.792 136.693 538.792 140.572 507.347 128.539 507.347 128.541 538.792" fill="#ffb6b6"/><path d="M223.67984,711.78319l16.0552-.00065h.00065A10.23221,10.23221,0,0,1,249.96733,722.014v.33248l-26.287.001Z" transform="translate(-97.21873 -175.65252)" fill="#2f2e41"/><polygon points="66.033 538.792 74.185 538.792 78.064 507.347 66.032 507.347 66.033 538.792" fill="#ffb6b6"/><path d="M161.1721,711.78319l16.05521-.00065h.00065A10.23219,10.23219,0,0,1,187.45959,722.014v.33248l-26.287.001Z" transform="translate(-97.21873 -175.65252)" fill="#2f2e41"/><path d="M163.171,525.829a43.78435,43.78435,0,0,0-2.32742,27.54938l-2.32741,155.984h17.9046l10.02438-85.78189,16.6244-56.523,17.95435,43.88841v91.47083l17.28937-1.03411,9.30966-97.08648-10.63961-69.15749Z" transform="translate(-97.21873 -175.65252)" fill="#2f2e41"/><path d="M228.67108,404.47092l-15.29444-4.65484-3.98986-7.97971H189.74119l-4.95852,8.64469s-19.94927,7.31473-20.61425,42.55846-3.32488,91.76667-3.32488,91.76667l78.66089,11.21416Z" transform="translate(-97.21873 -175.65252)" fill="#00c7ff"/><path d="M251.2538,539.70888A8.40612,8.40612,0,0,0,245.759,528.049l-2.30564-29.78338-12.26093,9.52066,4.06921,26.82319a8.45167,8.45167,0,0,0,15.99219,5.09942Z" transform="translate(-97.21873 -175.65252)" fill="#ffb6b6"/><path d="M230.33447,524.3584l-17.458-44.58789V415.74756a11.95065,11.95065,0,0,1,23.82081-1.38477l7.10009,60.87061L250.52,522.96582Z" transform="translate(-97.21873 -175.65252)" fill="#00c7ff"/><circle cx="106.11386" cy="186.2002" r="19.63241" fill="#ffb9b9"/><path d="M204.61818,355.88489c-.91858,1.17913-2.17774,2.2436-2.38,3.72454-.14984,1.09735.32953,2.18183.37521,3.28843a4.38775,4.38775,0,0,1-4.10213,4.39293,4.86761,4.86761,0,0,0-3.13333-1.7918,2.89129,2.89129,0,0,0-2.97665,1.71964c-.583,1.647.76647,3.31993.98346,5.05349a10.45248,10.45248,0,0,1-.612,3.76625c-.49747,1.989-.6304,4.09344-1.50314,5.94869s-2.81333,3.451-4.82221,3.041c-1.68918-.34481-2.83218-1.981-3.30461-3.639s-.45121-3.41606-.79314-5.10585c-1.11092-5.4907-5.8371-9.55879-7.69135-14.845-2.376-6.77346.47834-14.52123,5.39758-19.74869a16.07587,16.07587,0,0,1,7.48865-4.84854c3.06552-.78061,6.30664-.2195,9.4523-.55331,3.364-.357,6.526-1.724,9.79535-2.59282s6.92109-1.196,9.89285.42029c2.07272,1.12731,3.57381,3.0711,5.505,4.42663a11.54819,11.54819,0,0,0,7.5865,2.03056l-3.21036,1.40331a10.31051,10.31051,0,0,0,4.3248,2.36867,7.48,7.48,0,0,1-4.60883,1.61788,5.26391,5.26391,0,0,0,3.31624,2.55c-2.43766,1.14435-5.02569,2.31676-7.70618,2.05868-1.313-.12638-2.568-.59313-3.865-.83336-2.76456-.512-5.60363.01865-8.36495.54837-1.45.27818-3.22959.5451-3.96184,1.93933C205.09063,353.38626,205.557,354.67983,204.61818,355.88489Z" transform="translate(-97.21873 -175.65252)" fill="#2f2e41"/><circle cx="236.5474" cy="205.37059" r="31.32001" fill="#00c7ff"/><polygon points="255.339 205.371 238.427 205.371 238.427 188.458 234.668 188.458 234.668 205.371 217.755 205.371 217.755 209.129 234.668 209.129 234.668 226.042 238.427 226.042 238.427 209.129 255.339 209.129 255.339 205.371" fill="#fff"/><path d="M600.47428,245.66092a3.6469,3.6469,0,0,0-3.643,3.643v60.998a3.64728,3.64728,0,0,0,3.643,3.64345H846.37687a3.64729,3.64729,0,0,0,3.643-3.64345v-60.998a3.64686,3.64686,0,0,0-3.643-3.643Z" transform="translate(-97.21873 -175.65252)" fill="#fff"/><path d="M600.47428,245.66092a3.6469,3.6469,0,0,0-3.643,3.643v60.998a3.64728,3.64728,0,0,0,3.643,3.64345H846.37687a3.64729,3.64729,0,0,0,3.643-3.64345v-60.998a3.64686,3.64686,0,0,0-3.643-3.643Z" transform="translate(-97.21873 -175.65252)" fill="#e6e6e6"/><path d="M600.92954,309.84676H845.92136V249.75948H600.92954Z" transform="translate(-97.21873 -175.65252)" fill="#fff"/><path d="M628.78433,267.05261a3.18763,3.18763,0,0,0,0,6.37526H818.05811a3.18763,3.18763,0,1,0,.00274-6.37526H628.78433Z" transform="translate(-97.21873 -175.65252)" fill="#e4e4e4"/><path d="M628.78433,286.17837a3.18763,3.18763,0,0,0,0,6.37525H818.05811a3.18763,3.18763,0,0,0,.01422-6.37525h-189.288Z" transform="translate(-97.21873 -175.65252)" fill="#e4e4e4"/><path d="M429.47428,349.16092a3.6469,3.6469,0,0,0-3.643,3.643v60.998a3.64728,3.64728,0,0,0,3.643,3.64345H675.37687a3.64729,3.64729,0,0,0,3.643-3.64345v-60.998a3.64686,3.64686,0,0,0-3.643-3.643Z" transform="translate(-97.21873 -175.65252)" fill="#fff"/><path d="M429.47428,349.16092a3.6469,3.6469,0,0,0-3.643,3.643v60.998a3.64728,3.64728,0,0,0,3.643,3.64345H675.37687a3.64729,3.64729,0,0,0,3.643-3.64345v-60.998a3.64686,3.64686,0,0,0-3.643-3.643Z" transform="translate(-97.21873 -175.65252)" fill="#e6e6e6"/><path d="M429.92954,413.34676H674.92136V353.25948H429.92954Z" transform="translate(-97.21873 -175.65252)" fill="#fff"/><path d="M457.78433,370.55261a3.18763,3.18763,0,0,0,0,6.37526H647.05811a3.18763,3.18763,0,1,0,.00274-6.37526H457.78433Z" transform="translate(-97.21873 -175.65252)" fill="#e4e4e4"/><path d="M457.78433,389.67837a3.18763,3.18763,0,0,0,0,6.37525H647.05811a3.18763,3.18763,0,0,0,.01422-6.37525h-189.288Z" transform="translate(-97.21873 -175.65252)" fill="#e4e4e4"/><path d="M729.21114,512.87384a7.53637,7.53637,0,0,0,6.4045-9.619l21.79308-15.56647-12.98756-5.00094-18.70395,15.54889a7.57718,7.57718,0,0,0,3.49393,14.63752Z" transform="translate(-97.21873 -175.65252)" fill="#ffb7b7"/><path d="M741.31006,502.62159l-7.22961-12.34781.15352-.17509,29.16956-33.20861,22.648-38.623,19.66686,2.50659.29018,5.94467-.05873.0888L774.704,473.77685l-.03322.02834Z" transform="translate(-97.21873 -175.65252)" fill="#3f3d56"/><polygon points="740.467 535.914 729.346 535.913 724.054 493.014 740.469 493.015 740.467 535.914" fill="#ffb7b7"/><path d="M840.52256,722.34748l-35.86183-.00133v-.4536a13.95918,13.95918,0,0,1,13.95842-13.9582H818.62l21.90318.00089Z" transform="translate(-97.21873 -175.65252)" fill="#2f2e41"/><polygon points="644.748 535.55 633.93 532.967 638.746 490.012 654.712 493.824 644.748 535.55" fill="#ffb7b7"/><path d="M742.222,722.34748l-34.8812-8.32907.10534-.44119a13.95916,13.95916,0,0,1,16.8182-10.33524l.00086.00021,21.30423,5.08718Z" transform="translate(-97.21873 -175.65252)" fill="#2f2e41"/><path d="M785.1913,398.65418V379.93305a25.08631,25.08631,0,0,1,50.17262,0v18.72113a3.3736,3.3736,0,0,1-3.36981,3.3698h-43.433A3.3736,3.3736,0,0,1,785.1913,398.65418Z" transform="translate(-97.21873 -175.65252)" fill="#2f2e41"/><circle cx="706.86764" cy="207.69456" r="18.3924" fill="#ffb7b7"/><path d="M779.25648,381.43074a19.86684,19.86684,0,0,1,19.8444-19.84439h3.7444a19.86669,19.86669,0,0,1,19.84422,19.84439v.37443h-7.91279l-2.69884-7.5572-.53969,7.5572h-4.0894l-1.36167-3.813-.27241,3.813H779.25648Z" transform="translate(-97.21873 -175.65252)" fill="#2f2e41"/><path d="M814.81456,480.42059l-46.82973-1.78233-2.61807-30.63715c-2.019-5.60772-2.05172-10.42252-.09683-14.31026a14.32409,14.32409,0,0,1,7.90822-6.8352l10.247-12.37616a13.94748,13.94748,0,0,1,10.82969-5.04783l26.623.182c.64223-.38607,4.53454-2.36427,12.21162.96359,8.327,3.61,6.39339,16.14738,6.37277,16.27334l-.019.11778-.09148.07746-17.70976,14.91361Z" transform="translate(-97.21873 -175.65252)" fill="#3f3d56"/><polygon points="671.139 299.694 648.988 340.08 632.194 523.817 651.169 529.612 684.756 385.882 723.736 525.534 746.481 526.103 730.994 364.944 717.46 302.548 671.139 299.694" fill="#2f2e41"/><path d="M624.99453,445.41035a3.64689,3.64689,0,0,0-4.58886,2.34208L601.59575,505.7778a3.64727,3.64727,0,0,0,2.34194,4.58928L837.85662,586.196a3.64729,3.64729,0,0,0,4.589-2.3425l18.80993-58.02537a3.64687,3.64687,0,0,0-2.34208-4.58886Z" transform="translate(-97.21873 -175.65252)" fill="#fff"/><path d="M624.99453,445.41035a3.64689,3.64689,0,0,0-4.58886,2.34208L601.59575,505.7778a3.64727,3.64727,0,0,0,2.34194,4.58928L837.85662,586.196a3.64729,3.64729,0,0,0,4.589-2.3425l18.80993-58.02537a3.64687,3.64687,0,0,0-2.34208-4.58886Z" transform="translate(-97.21873 -175.65252)" fill="#e6e6e6"/><path d="M605.63465,506.60859l233.05255,75.548,18.52908-57.159-233.05254-75.548Z" transform="translate(-97.21873 -175.65252)" fill="#fff"/><path d="M645.3284,474.48951a3.18763,3.18763,0,0,0-1.96594,6.06457l180.04983,58.36627a3.18763,3.18763,0,1,0,1.96855-6.06372l-.00262-.00085Z" transform="translate(-97.21873 -175.65252)" fill="#00c7ff"/><path d="M639.43059,492.68321a3.18763,3.18763,0,0,0-1.96593,6.06456L817.51449,557.114a3.18763,3.18763,0,0,0,1.97946-6.06018l-.01353-.00438Z" transform="translate(-97.21873 -175.65252)" fill="#00c7ff"/><path d="M827.53864,540.728a7.53632,7.53632,0,0,0-.39673-11.54925l8.64784-25.347-13.46991,3.49968-6.14706,23.53337a7.57718,7.57718,0,0,0,11.36586,9.86316Z" transform="translate(-97.21873 -175.65252)" fill="#ffb7b7"/><path d="M831.40154,525.34659,818.33276,519.521l4.39127-44.21559-4.0866-44.58591,17.44635-9.418,3.69833,4.663.00377.1058,1.95962,56.37951-.01039.04282Z" transform="translate(-97.21873 -175.65252)" fill="#3f3d56"/><path d="M1101.255,724.34746l-683.44821,0a1.56682,1.56682,0,0,1-1.53909-1.13363,1.52912,1.52912,0,0,1,1.47725-1.91893l683.385,0a1.61535,1.61535,0,0,1,1.61617,1.19368A1.52819,1.52819,0,0,1,1101.255,724.34746Z" transform="translate(-97.21873 -175.65252)" fill="#ccc"/><path d="M327.255,724.34746l-228.44821,0a1.56682,1.56682,0,0,1-1.53909-1.13363,1.52912,1.52912,0,0,1,1.47725-1.91893l228.385,0a1.61535,1.61535,0,0,1,1.61617,1.19368A1.52819,1.52819,0,0,1,327.255,724.34746Z" transform="translate(-97.21873 -175.65252)" fill="#ccc"/></svg>                    
                        </div>
                    
                    <div className="div-m-cont">
                        <DropdownSelect/>
                        <div className="todo-add-field">
                            <input type="text" placeholder="Write your task" />
                        </div>

                        <div className="btn-add">
                            {/* <IconContext.Provider value={{color:"White", size:"25px"}} >
                                <AiOutlinePlus />
                            </IconContext.Provider> */}
                            Add
                        </div>
                    </div>

                    <div className="quote">
                        <p>Have a nice day!</p>
                    </div>
                    
                </div>
                
            </div>
            
        </div>
    )
}

export default AddPage;
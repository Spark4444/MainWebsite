import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./css/style.css";

function ChudjakAndDefenceOfAgartha(){
    return (
        <>
            <audio src="audio/All The Things She Said Slowed (Dj Gollum).mp3" id="audio1"></audio>
            <audio src="audio/All The Things She Said.mp3" id="audio2"></audio>
            <audio src="audio/Better Off Alone x Bass Slut.mp3" id="audio3"></audio>
            <audio src="audio/Better Off Alone x Vacation Bible School.mp3" id="audio4"></audio>
            <audio src="audio/Caramelldansen Sped Up.mp3" id="audio5"></audio>
            <audio src="audio/Clarity.mp3" id="audio6"></audio>
            <audio src="audio/Cool For The Summer Slowed (Cold Suhou Hardstyle Remix).mp3" id="audio7"></audio>
            <audio src="audio/D3stroy M3 Slowed.mp3" id="audio8"></audio>
            <audio src="audio/Die Young Slowed (Lil Texas Edit).mp3" id="audio9"></audio>
            <audio src="audio/Dota Sped Up.mp3" id="audio10"></audio>
            <audio src="audio/High As Fuck.mp3" id="audio11"></audio>
            <audio src="audio/Play Hard (Edensheps Remix).mp3" id="audio12"></audio>
            <audio src="audio/Popipo.mp3" id="audio13"></audio>
            <audio src="audio/Pretty Rave Girl Slowed.mp3" id="audio14"></audio>
            <audio src="audio/Solo Tu Sped Up (X-Mod Radio Remix).mp3" id="audio15"></audio>
            <audio src="audio/Solo Tu Sped Up.mp3" id="audio16"></audio>
            <audio src="audio/The Days Slowed(Notion Remix).mp3" id="audio17"></audio>
            <audio src="audio/Time Is Ticking Sped Up (G4bby Remix).mp3" id="audio18"></audio>

            <img src="" draggable="false" onclick="openMusicPlayer()" alt="Hide button" class="hideButton" />
            <div class="musicPlayer" style={{opacity: 1, display: none}}>
                <div class="currentlyPlaying"></div>
                <input type="range" class="timeInput" onchange="audio.changeTime(this.value)" min="0" max="100" step="1" value="0" />
                <div class="buttonsWrap">
                    <img src="img/forward.svg" draggable="false" onclick="audio.rewindCurrent()" alt="Rewind button" class="rewindButton" />
                    <img src="img/play.svg" draggable="false" onclick="audio.playPauseCurrent()" alt="Pause button" class="pauseButton" />
                    <img src="img/forward.svg" draggable="false" onclick="audio.forwardTrack()" alt="Forward button" class="forwardButton" />
                </div>
                <input type="range" class="volumeInput" min="0" max="100" step="1" value="50" />
            </div>

            <div class="pauseMenu" style={{display: none, opacity: 0}}>
                <div class="menuWrap">
                    <div class="pauseMenuWindowControls">
                        <div class="menuWrapGrab">Pause menu</div>
                        <div class="closePause"><div class="pauseX" onclick="stopGame()">x</div></div>
                    </div>
                    <div class="pauseMenuButtons">
                        <div class="continueButton" onclick="stopGame()">Continue</div>
                        <div class="restartButton" onclick="restartGame(true)">Restart</div>
                        <div class="mainMenuButton" onclick="openMainMenu()">Main menu</div>
                        <div class="exitButton" onclick="exit()">Exit</div>
                    </div>
                </div>
            </div>

            <div class="settings" style="opacity: 1; display: none;">
                <div class="windowControls">
                    <div class="settingsGrab">Settings</div>
                    <div class="closeSettingsButton"><div class="settingsX" onclick="openSettings()">x</div></div>
                </div>
                <div class="options">
                    <div class="option">
                        <div class="optionName">Current level: </div>
                        <select class="levelSelect setting" variable="levelId">
                            <option class="levelSelectOption" value="0">0</option>
                        </select>
                    </div>
                    <div class="option">
                        <div class="optionName">Count down time: </div>
                        <input type="range" class="countDownTime setting" variable="time" min="0" max="10" step="1" value="3" />
                        <div class="inputValue">3</div>
                    </div>
                    <div class="option">
                        <div class="resetLocal" onclick="resetLocal()">Reset local storage(in case of any errors)</div>
                    </div>
                    <div class="option">
                        <a href="keybindsDocumentation.html" target="_blank" class="documentation">Keybinds documentation</a>
                    </div>
                </div>
            </div>

            <div class="countDown" style="display: none;"></div>


            <div class="mainMenu">
                <div class="titleWrap">
                    <div class="title">Chudjak And Defence Of Agartha</div>
                    <div class="author">Made by Sigma Budanov</div>
                </div>
                    <div class="mainWrap">
                    <div class="startButton" style="opacity: 1;" onclick="startGame()">Start</div>
                    <div class="optionsText" onclick="openSettings()">Options</div>
                    <div class="exit" onclick="exit()">Exit</div>
                </div>
            </div>


            <div class="game" style="display: none; opacity: 0;"></div>

            <script src="js/functions.js"></script>
            <script src="js/settingsInputs.js"></script>
            <script src="js/menus.js"></script>
            <script src="js/levels.js"></script>
            <script src="js/levelInitialization.js"></script>
            <script src="js/gameUpdate.js"></script>
            <script src="js/playerMovement.js"></script>
            <script src="js/ballPhysics.js"></script>
            <script src="js/musControl.js"></script>
            <script src="js/localStorageControl.js"></script>
            <script src="js/windowGrab.js"></script>

            <Outlet />
        </>
    )
}

export default ChudjakAndDefenceOfAgartha;
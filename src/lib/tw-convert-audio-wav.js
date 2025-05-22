import SharedAudioContext from './audio/shared-audio-context';
import WavEncoder from 'wav-encoder';

const convertAudioToWav = fileData => {
    /** @type {AudioContext} */
    const audioContext = new SharedAudioContext();

    return audioContext.decodeAudioData(fileData)
        .then(decodedData => {
            const channels = [];
            for (let i = 0; i < decodedData.numberOfChannels; i++) {
                channels.push(decodedData.getChannelData(i));
            }
            return WavEncoder.encode({
                sampleRate: decodedData.sampleRate,
                channelData: channels
            });
        });
};

export default convertAudioToWav;

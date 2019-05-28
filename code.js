// video element ids
var live_player_id = "video_player_live";
var live_player_encrypted_id = "video_player_encrypted";
// HLS endpoint
var video_source = "https://ccf3786b925ee51c.mediapackage.us-east-1.amazonaws.com/out/v1/dab0d8450e7545b48968cc391ddfe354/index.m3u8";
var video_source_encrypted = "https://63050ee307b58b8f.mediapackage.us-east-1.amazonaws.com/out/v1/3d372f11aa2b4b4b8ebc5561853c4e7f/index.m3u8";

// initalize the page
$(document).ready(() => {
    // set the live player
    prepare_player(live_player_id, video_source);
    // set the vod player
    prepare_player(live_player_encrypted_id, video_source_encrypted);
});

// set the specified player with the source URL
var prepare_player = (id, source) => {
    let player = videojs("#" + id);
    player.reset();
    player.src({
        "src": source,
        "type": "application/x-mpegURL"
    });
    player.load();
}

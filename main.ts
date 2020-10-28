namespace SpriteKind {
    export const coin = SpriteKind.create()
    export const TrueCoin = SpriteKind.create()
}
function start_level () {
    if (current_level == 0) {
        tiles.setTilemap(tiles.createTilemap(hex`230010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000080000000000000000000800000000000805000000030008000100000801010000060008010600080001060100080007000000040202020202020202020202020202020202020202020202020202020202020202020202`, img`
            ...................................
            ...................................
            ...................................
            ...................................
            ...................................
            ...................................
            ...................................
            ...................................
            ...................................
            ...................................
            ...................................
            ...................................
            ...................................
            ...................................
            ....2...2...22..2..22...222...2....
            22222222222222222222222222222222222
            `, [myTiles.transparency16,myTiles.tile2,myTiles.tile7,myTiles.tile3,myTiles.tile8,myTiles.tile9,myTiles.tile4,myTiles.tile6,myTiles.tile16], TileScale.Sixteen))
    } else if (current_level == 1) {
        tiles.setTilemap(tiles.createTilemap(hex`230010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000d0000000000000000000000000000000000000000000000000000000000000000000003000000000000000d00000000000000000000000d0000000c0002000d00000000000004000d00000004040d0000000000000d040404000d00000501010101010600000007010101060000070101010600000000070101010101010101010a0a0a0a0a080b0b0b090a0a0a080b0b090a0a0a080b0b0b0b090a0a0a0a0a0a0a0a0a`, img`
            ...................................
            ...................................
            ...................................
            ...................................
            ...................................
            ...................................
            ...................................
            ...................................
            ...................................
            ...................................
            ...................................
            ...................................
            ...........2.......................
            ..2........2.....22........222.....
            222222...22222..22222....2222222222
            ...................................
            `, [myTiles.transparency16,myTiles.tile7,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile8,myTiles.tile10,myTiles.tile11,myTiles.tile12,myTiles.tile13,myTiles.tile14,myTiles.tile15,myTiles.tile9,myTiles.tile16], TileScale.Sixteen))
    } else if (current_level == 2) {
        tiles.setTilemap(tiles.createTilemap(hex`230010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000e000000000000000000000e0000000000000000000000000e000000000000000e0000010000000000000e0e00000100000000000000000c0d00000100000000000e0f0b0a00020000000000000f0a00000200000e0000000e0f0b03030303030304000005030303030303040000000503030303030303040000000503030808080808080609090708080808080806090909070808080808080806090909070808`, img`
            ...................................
            ...................................
            ...................................
            ...................................
            ...................................
            ...................................
            ...................................
            ...................................
            ...................................
            ...................................
            ...................................
            ...................................
            ..............2..........2.........
            ...2......222.2......22..2.......22
            2222222..22222222...222222222...222
            ......2..2......2...2.......2......
            `, [myTiles.transparency16,myTiles.tile2,myTiles.tile3,myTiles.tile7,myTiles.tile10,myTiles.tile11,myTiles.tile12,myTiles.tile13,myTiles.tile14,myTiles.tile15,myTiles.tile4,myTiles.tile5,myTiles.tile8,myTiles.tile9,myTiles.tile16,myTiles.tile17], TileScale.Sixteen))
    } else {
        game.over(true, effects.confetti)
    }
    for (let value of sprites.allOfKind(SpriteKind.TrueCoin)) {
        TrueCoin1.destroy()
    }
    scene.cameraFollowSprite(Astro_Hero)
    tiles.placeOnRandomTile(Astro_Hero, myTiles.tile9)
    for (let Value2 of tiles.getTilesByType(myTiles.tile9)) {
        tiles.setTileAt(Value2, myTiles.transparency16)
    }
    Astro_Hero.ay = 200
    for (let variable1 of tiles.getTilesByType(myTiles.tile16)) {
        TrueCoin1 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . c c c c c c c . . . . . 
            . . . c 5 5 5 5 5 5 5 c . . . . 
            . . c 5 5 5 5 5 5 5 5 5 c . . . 
            . c 5 5 5 1 1 1 1 1 5 5 5 c . . 
            . c 5 5 5 5 5 5 5 5 5 5 5 c . . 
            . c 5 1 5 5 5 5 5 5 5 5 5 c . . 
            . c 5 1 5 5 5 5 5 5 5 5 5 c . . 
            . c 5 1 5 5 5 5 5 5 5 5 5 c . . 
            . c 5 1 5 5 5 5 5 5 5 5 5 c . . 
            . c 5 5 5 5 5 5 5 5 5 5 5 c . . 
            . . c 5 5 5 1 1 1 5 5 5 c . . . 
            . . . c 5 5 5 5 5 5 5 c . . . . 
            . . . . c c c c c c c . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.TrueCoin)
        animation.runImageAnimation(
        TrueCoin1,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . c c c c c c . . . . . 
            . . . . c 5 5 5 5 5 5 c . . . . 
            . . . c 5 5 1 1 1 1 5 5 c . . . 
            . . c 5 5 5 5 5 5 5 5 5 5 c . . 
            . . c 5 1 5 5 5 5 5 5 5 5 c . . 
            . . c 5 1 5 5 5 5 5 5 5 5 c . . 
            . . c 5 1 5 5 5 5 5 5 5 5 c . . 
            . . c 5 1 5 5 5 5 5 5 5 5 c . . 
            . . c 5 1 5 5 5 5 5 5 5 5 c . . 
            . . c 5 5 5 5 5 5 5 5 5 5 c . . 
            . . . c 5 5 1 1 1 5 5 5 c . . . 
            . . . . c 5 5 5 5 5 5 c . . . . 
            . . . . . c c c c c c . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . c c c c . . . . . . 
            . . . . . c 5 5 5 5 c . . . . . 
            . . . . c 5 5 1 1 5 5 c . . . . 
            . . . c 5 5 5 5 5 5 5 5 c . . . 
            . . . c 5 1 5 5 5 5 5 5 c . . . 
            . . . c 5 1 5 5 5 5 5 5 c . . . 
            . . . c 5 1 5 5 5 5 5 5 c . . . 
            . . . c 5 1 5 5 5 5 5 5 c . . . 
            . . . c 5 1 5 5 5 5 5 5 c . . . 
            . . . c 5 5 5 5 5 5 5 5 c . . . 
            . . . . c 5 5 1 1 5 5 c . . . . 
            . . . . . c 5 5 5 5 c . . . . . 
            . . . . . . c c c c . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . c c . . . . . . . 
            . . . . . . c 5 5 c . . . . . . 
            . . . . . c 5 5 5 5 c . . . . . 
            . . . . c 5 5 5 5 5 5 c . . . . 
            . . . . c 5 1 5 5 5 5 c . . . . 
            . . . . c 5 1 5 5 5 5 c . . . . 
            . . . . c 5 1 5 5 5 5 c . . . . 
            . . . . c 5 1 5 5 5 5 c . . . . 
            . . . . c 5 1 5 5 5 5 c . . . . 
            . . . . c 5 5 5 5 5 5 c . . . . 
            . . . . . c 5 5 5 5 c . . . . . 
            . . . . . . c 5 5 c . . . . . . 
            . . . . . . . c c . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . c c . . . . . . . 
            . . . . . . . c c . . . . . . . 
            . . . . . . c 5 5 c . . . . . . 
            . . . . . c 5 5 5 5 c . . . . . 
            . . . . . c 5 1 5 5 c . . . . . 
            . . . . . c 5 1 5 5 c . . . . . 
            . . . . . c 5 1 5 5 c . . . . . 
            . . . . . c 5 1 5 5 c . . . . . 
            . . . . . c 5 1 5 5 c . . . . . 
            . . . . . c 5 5 5 5 c . . . . . 
            . . . . . . c 5 5 c . . . . . . 
            . . . . . . . c c . . . . . . . 
            . . . . . . . c c . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . c c . . . . . . . 
            . . . . . . . c c . . . . . . . 
            . . . . . . . c c . . . . . . . 
            . . . . . . c 5 5 c . . . . . . 
            . . . . . . c 5 5 c . . . . . . 
            . . . . . . c 5 5 c . . . . . . 
            . . . . . . c 5 5 c . . . . . . 
            . . . . . . c 5 5 c . . . . . . 
            . . . . . . c 5 5 c . . . . . . 
            . . . . . . c 5 5 c . . . . . . 
            . . . . . . . c c . . . . . . . 
            . . . . . . . c c . . . . . . . 
            . . . . . . . c c . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . c c . . . . . . . 
            . . . . . . . c c . . . . . . . 
            . . . . . . c 5 5 c . . . . . . 
            . . . . . c 5 5 5 5 c . . . . . 
            . . . . . c 5 1 5 5 c . . . . . 
            . . . . . c 5 1 5 5 c . . . . . 
            . . . . . c 5 1 5 5 c . . . . . 
            . . . . . c 5 1 5 5 c . . . . . 
            . . . . . c 5 1 5 5 c . . . . . 
            . . . . . c 5 5 5 5 c . . . . . 
            . . . . . . c 5 5 c . . . . . . 
            . . . . . . . c c . . . . . . . 
            . . . . . . . c c . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . c c . . . . . . . 
            . . . . . . c 5 5 c . . . . . . 
            . . . . . c 5 5 5 5 c . . . . . 
            . . . . c 5 5 5 5 5 5 c . . . . 
            . . . . c 5 1 5 5 5 5 c . . . . 
            . . . . c 5 1 5 5 5 5 c . . . . 
            . . . . c 5 1 5 5 5 5 c . . . . 
            . . . . c 5 1 5 5 5 5 c . . . . 
            . . . . c 5 1 5 5 5 5 c . . . . 
            . . . . c 5 5 5 5 5 5 c . . . . 
            . . . . . c 5 5 5 5 c . . . . . 
            . . . . . . c 5 5 c . . . . . . 
            . . . . . . . c c . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . c c c c . . . . . . 
            . . . . . c 5 5 5 5 c . . . . . 
            . . . . c 5 5 1 1 5 5 c . . . . 
            . . . c 5 5 5 5 5 5 5 5 c . . . 
            . . . c 5 1 5 5 5 5 5 5 c . . . 
            . . . c 5 1 5 5 5 5 5 5 c . . . 
            . . . c 5 1 5 5 5 5 5 5 c . . . 
            . . . c 5 1 5 5 5 5 5 5 c . . . 
            . . . c 5 1 5 5 5 5 5 5 c . . . 
            . . . c 5 5 5 5 5 5 5 5 c . . . 
            . . . . c 5 5 1 1 5 5 c . . . . 
            . . . . . c 5 5 5 5 c . . . . . 
            . . . . . . c c c c . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . c c c c c c . . . . . 
            . . . . c 5 5 5 5 5 5 c . . . . 
            . . . c 5 5 1 1 1 1 5 5 c . . . 
            . . c 5 5 5 5 5 5 5 5 5 5 c . . 
            . . c 5 1 5 5 5 5 5 5 5 5 c . . 
            . . c 5 1 5 5 5 5 5 5 5 5 c . . 
            . . c 5 1 5 5 5 5 5 5 5 5 c . . 
            . . c 5 1 5 5 5 5 5 5 5 5 c . . 
            . . c 5 1 5 5 5 5 5 5 5 5 c . . 
            . . c 5 5 5 5 5 5 5 5 5 5 c . . 
            . . . c 5 5 1 1 1 5 5 5 c . . . 
            . . . . c 5 5 5 5 5 5 c . . . . 
            . . . . . c c c c c c . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        100,
        true
        )
        tiles.placeOnTile(TrueCoin1, variable1)
        tiles.setTileAt(variable1, myTiles.transparency16)
    }
    for (let value of tiles.getTilesByType(myTiles.tile15)) {
        animation.runImageAnimation(
        TrueCoin1,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . 6 . 
            . . 5 . . . . . . 7 . . . 6 . 6 
            . 5 . 5 . . . . 7 . 7 . . . 6 . 
            . . 5 . . . . . . 7 . . . . . . 
            . . . . . . . . . . 5 5 7 7 6 . 
            . 6 5 . . . . . 6 7 7 7 7 7 7 5 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 5 5 7 7 7 7 7 7 7 7 5 7 7 
            7 7 5 5 5 7 7 7 7 5 5 5 5 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 5 5 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 5 5 7 7 7 7 7 7 7 7 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . 7 . . . . 6 . 
            . . 5 . . . . . 7 . 7 . . 6 . 6 
            . 5 . 5 . . . . . 7 . . . . 6 . 
            . . 5 . . . . . . 6 7 7 7 6 5 . 
            . . . . . . . . 6 7 7 7 7 7 7 5 
            6 6 5 . . . 5 . 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 5 5 5 7 7 
            7 7 5 5 5 7 7 7 7 5 5 5 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 5 5 5 5 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 5 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . 7 . . . . 6 . 
            . . 5 . . . . . 7 . 7 . . 6 . 6 
            . 5 . 5 . . . . . 7 . . . . 6 . 
            . . 5 . . . . . . . . . . . . . 
            . . . . . . . . . 6 7 7 7 6 5 . 
            . . . . . . . . 6 7 7 7 7 7 7 5 
            6 6 5 . . . 5 7 7 7 7 7 7 7 7 7 
            6 7 7 7 7 7 7 7 7 7 7 7 5 5 7 7 
            7 7 7 5 5 7 7 7 7 5 5 5 5 7 7 7 
            7 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 5 5 5 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 5 5 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . 7 . . . . 6 . 
            . . 5 . . . . . 7 . 7 . . 6 . 6 
            . 5 . 5 . . . . . 7 . . . . 6 . 
            . . 5 . . . . . . 6 7 7 7 6 5 . 
            . . . . . . . . 6 7 7 7 7 7 7 5 
            6 6 5 . . . 5 . 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 5 5 5 7 7 
            7 7 5 5 5 7 7 7 7 5 5 5 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 5 5 5 5 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 5 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . 6 . 
            . . 5 . . . . . . 7 . . . 6 . 6 
            . 5 . 5 . . . . 7 . 7 . . . 6 . 
            . . 5 . . . . . . 7 . . . . . . 
            . . . . . . . . . . 5 5 7 7 6 . 
            . 6 5 . . . . . 6 7 7 7 7 7 7 5 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 5 5 7 7 7 7 7 7 7 7 5 7 7 
            7 7 5 5 5 7 7 7 7 5 5 5 5 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 5 5 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 5 5 7 7 7 7 7 7 7 7 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        250,
        true
        )
    }
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Astro_Hero.vy == 0) {
        Astro_Hero.vy = -150
    }
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile15, function (sprite, location) {
    game.over(false, effects.melt)
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile8, function (sprite, location) {
    current_level += 1
    start_level()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.TrueCoin, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    otherSprite.destroy()
})
let TrueCoin1: Sprite = null
let Astro_Hero: Sprite = null
let current_level = 0
scene.setBackgroundImage(img`
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111fffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffff111fffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111fffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffff111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffff111ffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffff111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffff1fffffffffffffffffffff1fffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111ffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111ffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111ffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111ffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffddddddddddfffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdddddddddddddddddddddffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddffffffddffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddffffddddddffffdf
    ffffffffffffffffffffffffffffffffffffffffffffffffffffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfffdddddddddddddddf
    fffffffffffffffffffffffffffffff1ffffffffffffffffffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfdddddddddddddddddf
    ffffffffffffffffffffffffffffffffffffffffffffffffddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfddddddddddddddddddf
    fffffffffffffffff1ffffffffffffffffffffffffffffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddffddddddddddddddddddf
    fffffffffffffffffffffffffffffffffffffffffffffddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddffffdfdddddddddddddddddff
    fffffffffffffffffffffffffffffffffffffffffffdddddddddddddddddddddddddddddddddddddddddfffddddddddddddddddddddddddddddddddddddddddddddddffdddddfddddddddddddddddddd
    fffffffffffffffffffffffffffffffffffffffffddddddddddddddddddddddddddddddddddddfffffffdddffdddddddddddddddddddddddddddddddddddddddddddddddddddfdddddddddddfddddddd
    ffffffffffffffffffffffffffffffffffffffdddddddddddddddddddddddddddddddddddddffddddddddddfffddddddddddddddddddddddddddddddddddddddddddddddddddfdddddddddddffdddddd
    ffffffffffffffffffffffffffffffffffffddddddddddddddddddddddddddddddddddddddfdddddddddddddddfdddddddddddddddddddddddddddddddddddddddddddddddddfdddddddddddffdddddd
    ffffffffffffffffffffffffffffffffffdddddddddddddddddddddddddddddddddddddddfdddddddddddddddddfddddddddddddddddddddddddddddddddddddddddddddddddfdddddddddddfffddddd
    ffffffffffffffffffffffffffffffff8ddddddddddddddddddddddddddddddddddddddddfddddfddddddddddddfddddddddddddddddddddddddddddddddddddddddddddddfddfdddddddddddffddddf
    ffffffffffffffffffffffffffffffddddddddddddddddddddddddddddddddddddddddddffdddddffddddddddddfddddddddddddddddddddddddddddddddddddddddddddddfdddfdddddddddddfddddd
    fffffffffffffffffffffffffffffddddddddddddddddddddddddddddddddddddddddddffdfddddddffffffddddffddddddddddddddddddddddddddddddddddddddddddddfdddddfdddddddddddfdddd
    ffffffffffffffffffffffffffffddddddddddddddddddddddddddddddddddddddddddfffddfddddddddddddddfffddddddddddddddddddddddddddddddddddddddddddffdddddddfddddddddddddddd
    ffffffffffffffffffffffff8ddddddddddddddddddddddddddddddddddddddddddddfffddddffffdddddddddfdffffddddddddddddddddddddddddddddddddddddddddfdddddddddffddddddddddddd
    fffffffffffffffffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfffffffffdddffffdddddddddddddddddddddddddddddddddddddffddddddddddddffddddddddddd
    ffffffffffffffff8ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfffffddddddddddddddddddddddddddddddddddfddddddddddddddddffddddddddd
    fffffffffddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfdffffdddddddddddddddddddddddddddddffffdddddddddddddddddddffffddddd
    ffffffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfffddddddddddddddddddddddddddddddddddddddddddddddddddddfddfffff
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfddddddddddddddddddddddddddddddddddddddddddddddddddddfddddddf
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddffddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfdddddddd
    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddffdddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfdfdddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfdddddddddd
    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfdddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfffffddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddffffffddddddddddddddddddddddddddddddddddddddddddddfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddfdddddfddddddddddddddddddddddddddddddddddddddddddddfffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddddddddddddddddddddfffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddffffffdddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddddddddddddddddddddfdfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddffffdddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddfdddfddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfffddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddfdddffddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddddddddddddddddddfdddddffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddfddddddfdfddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddffdddddddfdffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddddddddddddddfddddddddfdddfffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddffddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    `)
current_level = 0
Astro_Hero = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . f f f f f f . . . 
    . . . . . . f 2 2 2 2 2 2 f . . 
    . . . . . f 2 2 2 2 2 2 2 2 f . 
    . . . . f f 2 2 2 2 f f f f f . 
    . . . f f f f f f f d 1 1 1 f . 
    . . f f f f 2 2 2 f 1 1 f 1 f . 
    . . f f f f 2 2 2 2 f f 2 f f . 
    . . f f f f 2 2 2 2 2 2 2 2 f . 
    . . f f f f 2 2 2 2 2 2 2 2 f . 
    . . 4 4 4 f 2 2 2 2 2 2 2 2 f . 
    . . 5 4 5 f 2 2 2 f f 2 2 2 f . 
    . . . 5 . . f f f . . f f f . . 
    `, SpriteKind.Player)
controller.moveSprite(Astro_Hero, 100, 0)
start_level()

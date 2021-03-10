import { createChannel } from '../node_modules/decentraland-builder-scripts/channel'
import { createInventory } from '../node_modules/decentraland-builder-scripts/inventory'
import Script1 from "../c72c3d45-0309-4834-84df-7b5f517694fa/src/item"
import Script2 from "../80d9cb1c-2fcf-4585-8e19-e2d5621fd54d/src/item"
import Script3 from "../7d669c08-c354-45e4-b3a3-c915c8fd6b6e/src/item"
import Script4 from "../ab84996d-dcdc-429c-818e-a7640239c803/src/item"
import Script5 from "../b88efbbf-2a9a-47b4-86e1-e38ecc2b433b/src/item"
import Script6 from "../8d62d5a3-411c-43f8-a438-574ccf3d0fbe/src/item"
import Script7 from "../c5cbd030-54d0-4f28-9158-d27401c691b1/src/item"
import Script8 from "../8bd080c9-9954-43b2-a6ac-0b0913d298c0/src/item"

const _scene = new Entity('_scene')
engine.addEntity(_scene)
const transform = new Transform({
  position: new Vector3(0, 0, 0),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
_scene.addComponentOrReplace(transform)

const entity = new Entity('entity')
engine.addEntity(entity)
entity.setParent(_scene)
const gltfShape = new GLTFShape("models/FloorBaseGrass_01/FloorBaseGrass_01.glb")
gltfShape.withCollisions = true
gltfShape.isPointerBlocker = true
gltfShape.visible = true
entity.addComponentOrReplace(gltfShape)
const transform2 = new Transform({
  position: new Vector3(8, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity.addComponentOrReplace(transform2)

const wallPlainBeige3 = new Entity('wallPlainBeige3')
engine.addEntity(wallPlainBeige3)
wallPlainBeige3.setParent(_scene)
const gltfShape2 = new GLTFShape("models/PlainBeigeWall.glb")
gltfShape2.withCollisions = true
gltfShape2.isPointerBlocker = true
gltfShape2.visible = true
wallPlainBeige3.addComponentOrReplace(gltfShape2)
const transform3 = new Transform({
  position: new Vector3(15.5, 0, 15.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(3.2515835762023926, 1, 0.9999999403953552)
})
wallPlainBeige3.addComponentOrReplace(transform3)

const wallPlainBeige5 = new Entity('wallPlainBeige5')
engine.addEntity(wallPlainBeige5)
wallPlainBeige5.setParent(_scene)
const transform4 = new Transform({
  position: new Vector3(0.49507033824920654, 0, 15.522404670715332),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(3.229687452316284, 1, 1.0000028610229492)
})
wallPlainBeige5.addComponentOrReplace(transform4)
wallPlainBeige5.addComponentOrReplace(gltfShape2)

const wallPlainBeige6 = new Entity('wallPlainBeige6')
engine.addEntity(wallPlainBeige6)
wallPlainBeige6.setParent(_scene)
wallPlainBeige6.addComponentOrReplace(gltfShape2)
const transform5 = new Transform({
  position: new Vector3(0.5015519261360168, 0, 7.071194171905518),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(3.3753154277801514, 1, 1.0000076293945312)
})
wallPlainBeige6.addComponentOrReplace(transform5)

const doorframeBeige = new Entity('doorframeBeige')
engine.addEntity(doorframeBeige)
doorframeBeige.setParent(_scene)
const transform6 = new Transform({
  position: new Vector3(8.983085632324219, 0, 0.36915475130081177),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
doorframeBeige.addComponentOrReplace(transform6)
const gltfShape3 = new GLTFShape("models/BeigeDoorframe.glb")
gltfShape3.withCollisions = true
gltfShape3.isPointerBlocker = true
gltfShape3.visible = true
doorframeBeige.addComponentOrReplace(gltfShape3)

const doorframeBeige2 = new Entity('doorframeBeige2')
engine.addEntity(doorframeBeige2)
doorframeBeige2.setParent(_scene)
doorframeBeige2.addComponentOrReplace(gltfShape3)
const transform7 = new Transform({
  position: new Vector3(9.023853302001953, 0.0036809444427490234, 15.513620376586914),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
doorframeBeige2.addComponentOrReplace(transform7)

const wallPlainBeige4 = new Entity('wallPlainBeige4')
engine.addEntity(wallPlainBeige4)
wallPlainBeige4.setParent(_scene)
wallPlainBeige4.addComponentOrReplace(gltfShape2)
const transform8 = new Transform({
  position: new Vector3(7.09949254989624, 0, 15.519172668457031),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(3.2515835762023926, 1, 0.9999999403953552)
})
wallPlainBeige4.addComponentOrReplace(transform8)

const wallPlainBeige = new Entity('wallPlainBeige')
engine.addEntity(wallPlainBeige)
wallPlainBeige.setParent(_scene)
wallPlainBeige.addComponentOrReplace(gltfShape2)
const transform9 = new Transform({
  position: new Vector3(6.996547698974609, 0, 0.371711403131485),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(3.2515835762023926, 1, 0.9999999403953552)
})
wallPlainBeige.addComponentOrReplace(transform9)

const wallPlainBeige2 = new Entity('wallPlainBeige2')
engine.addEntity(wallPlainBeige2)
wallPlainBeige2.setParent(_scene)
wallPlainBeige2.addComponentOrReplace(gltfShape2)
const transform10 = new Transform({
  position: new Vector3(15.484457015991211, 0, 0.3501098155975342),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(3.2515835762023926, 1, 0.9999999403953552)
})
wallPlainBeige2.addComponentOrReplace(transform10)

const wallPlainBeige7 = new Entity('wallPlainBeige7')
engine.addEntity(wallPlainBeige7)
wallPlainBeige7.setParent(_scene)
wallPlainBeige7.addComponentOrReplace(gltfShape2)
const transform11 = new Transform({
  position: new Vector3(15.232155799865723, 0, 6.84541654586792),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(3.3752806186676025, 1, 1.000004529953003)
})
wallPlainBeige7.addComponentOrReplace(transform11)

const wallPlainBeige8 = new Entity('wallPlainBeige8')
engine.addEntity(wallPlainBeige8)
wallPlainBeige8.setParent(_scene)
wallPlainBeige8.addComponentOrReplace(gltfShape2)
const transform12 = new Transform({
  position: new Vector3(15.231847763061523, 0, 15.272286415100098),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(3.2237322330474854, 1, 1.0000114440917969)
})
wallPlainBeige8.addComponentOrReplace(transform12)

const doorframeBeige3 = new Entity('doorframeBeige3')
engine.addEntity(doorframeBeige3)
doorframeBeige3.setParent(_scene)
doorframeBeige3.addComponentOrReplace(gltfShape3)
const transform13 = new Transform({
  position: new Vector3(15.2324800491333, 0, 8.842061996459961),
  rotation: new Quaternion(2.262906752104987e-16, 0.7071068286895752, -8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(1.0000030994415283, 1, 1.0000030994415283)
})
doorframeBeige3.addComponentOrReplace(transform13)

const doorframeBeige4 = new Entity('doorframeBeige4')
engine.addEntity(doorframeBeige4)
doorframeBeige4.setParent(_scene)
doorframeBeige4.addComponentOrReplace(gltfShape3)
const transform14 = new Transform({
  position: new Vector3(0.4949747323989868, 0, 9.07154655456543),
  rotation: new Quaternion(2.262906752104987e-16, 0.7071068286895752, -8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(1.0000083446502686, 1, 1.0000083446502686)
})
doorframeBeige4.addComponentOrReplace(transform14)

const grassTile = new Entity('grassTile')
engine.addEntity(grassTile)
grassTile.setParent(_scene)
const transform15 = new Transform({
  position: new Vector3(12.738037109375, 4, 7.798883438110352),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.7439682483673096, 1, 7.595478057861328)
})
grassTile.addComponentOrReplace(transform15)
const gltfShape4 = new GLTFShape("models/FloorBlock_05/FloorBlock_05.glb")
gltfShape4.withCollisions = true
gltfShape4.isPointerBlocker = true
gltfShape4.visible = true
grassTile.addComponentOrReplace(gltfShape4)

const grassTile2 = new Entity('grassTile2')
engine.addEntity(grassTile2)
grassTile2.setParent(_scene)
grassTile2.addComponentOrReplace(gltfShape4)
const transform16 = new Transform({
  position: new Vector3(3.402282476425171, 4, 7.8280744552612305),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.7439682483673096, 1, 7.589516639709473)
})
grassTile2.addComponentOrReplace(transform16)

const grassTile3 = new Entity('grassTile3')
engine.addEntity(grassTile3)
grassTile3.setParent(_scene)
grassTile3.addComponentOrReplace(gltfShape4)
const transform17 = new Transform({
  position: new Vector3(8.121557235717773, 4, 11.902769088745117),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.991341471672058, 1, 3.5406391620635986)
})
grassTile3.addComponentOrReplace(transform17)

const grassTile4 = new Entity('grassTile4')
engine.addEntity(grassTile4)
grassTile4.setParent(_scene)
grassTile4.addComponentOrReplace(gltfShape4)
const transform18 = new Transform({
  position: new Vector3(8.13612174987793, 4, 2.7519357204437256),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.991341471672058, 1, 2.3896045684814453)
})
grassTile4.addComponentOrReplace(transform18)

const wallPlainBeige10 = new Entity('wallPlainBeige10')
engine.addEntity(wallPlainBeige10)
wallPlainBeige10.setParent(_scene)
wallPlainBeige10.addComponentOrReplace(gltfShape2)
const transform19 = new Transform({
  position: new Vector3(15.234710693359375, 4, 15.39966869354248),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(7.633630275726318, 0.979423999786377, 1.000014305114746)
})
wallPlainBeige10.addComponentOrReplace(transform19)

const verticalBluePad = new Entity('verticalBluePad')
engine.addEntity(verticalBluePad)
verticalBluePad.setParent(_scene)
const transform20 = new Transform({
  position: new Vector3(8.133349418640137, 0, 6.641632080078125),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.5, 1, 1.5)
})
verticalBluePad.addComponentOrReplace(transform20)

const largeOrnamentedStoneRail = new Entity('largeOrnamentedStoneRail')
engine.addEntity(largeOrnamentedStoneRail)
largeOrnamentedStoneRail.setParent(_scene)
const transform21 = new Transform({
  position: new Vector3(10.481276512145996, 8, 0.3023918867111206),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.000002145767212, 1, 1.000002145767212)
})
largeOrnamentedStoneRail.addComponentOrReplace(transform21)
const gltfShape5 = new GLTFShape("models/FenceStoneLarge_01/FenceStoneLarge_01.glb")
gltfShape5.withCollisions = true
gltfShape5.isPointerBlocker = true
gltfShape5.visible = true
largeOrnamentedStoneRail.addComponentOrReplace(gltfShape5)

const largeOrnamentedStoneRail2 = new Entity('largeOrnamentedStoneRail2')
engine.addEntity(largeOrnamentedStoneRail2)
largeOrnamentedStoneRail2.setParent(_scene)
largeOrnamentedStoneRail2.addComponentOrReplace(gltfShape5)
const transform22 = new Transform({
  position: new Vector3(5.542966365814209, 8, 0.31146660447120667),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000033378601074, 1, 1.0000033378601074)
})
largeOrnamentedStoneRail2.addComponentOrReplace(transform22)

const largeOrnamentedStoneRail3 = new Entity('largeOrnamentedStoneRail3')
engine.addEntity(largeOrnamentedStoneRail3)
largeOrnamentedStoneRail3.setParent(_scene)
largeOrnamentedStoneRail3.addComponentOrReplace(gltfShape5)
const transform23 = new Transform({
  position: new Vector3(0.5482220649719238, 8, 0.3080415725708008),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.000004529953003, 1, 1.000004529953003)
})
largeOrnamentedStoneRail3.addComponentOrReplace(transform23)

const nftPictureFrame = new Entity('nftPictureFrame')
engine.addEntity(nftPictureFrame)
nftPictureFrame.setParent(_scene)
const transform24 = new Transform({
  position: new Vector3(0.8590102195739746, 1.346331238746643, 10.5),
  rotation: new Quaternion(1.2352891333531485e-14, -0.7071067690849304, 8.429367426288081e-8, -0.7071068286895752),
  scale: new Vector3(3.644871950149536, 2.8222129344940186, 1.0000001192092896)
})
nftPictureFrame.addComponentOrReplace(transform24)

const imageFromURL = new Entity('imageFromURL')
engine.addEntity(imageFromURL)
imageFromURL.setParent(_scene)
const transform25 = new Transform({
  position: new Vector3(10.326037406921387, 1.1004910469055176, 0.3871469497680664),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.8106529712677002, 1.5931276082992554, 1)
})
imageFromURL.addComponentOrReplace(transform25)

const plainText = new Entity('plainText')
engine.addEntity(plainText)
plainText.setParent(_scene)
const transform26 = new Transform({
  position: new Vector3(7.985114574432373, 3.3403847217559814, 15.60966968536377),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(5, 3.5, 1)
})
plainText.addComponentOrReplace(transform26)

const externalLink = new Entity('externalLink')
engine.addEntity(externalLink)
externalLink.setParent(_scene)
const transform27 = new Transform({
  position: new Vector3(10.391874313354492, 0, 0.5533864498138428),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
externalLink.addComponentOrReplace(transform27)

const imageFromURL2 = new Entity('imageFromURL2')
engine.addEntity(imageFromURL2)
imageFromURL2.setParent(_scene)
const transform28 = new Transform({
  position: new Vector3(5.679545879364014, 1.1756607294082642, 0.5778308510780334),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.6676278114318848, 1.5, 1)
})
imageFromURL2.addComponentOrReplace(transform28)

const imageFromURL3 = new Entity('imageFromURL3')
engine.addEntity(imageFromURL3)
imageFromURL3.setParent(_scene)
const transform29 = new Transform({
  position: new Vector3(2.9838809967041016, 1.1756607294082642, 0.5104790925979614),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.6676278114318848, 1.5, 1)
})
imageFromURL3.addComponentOrReplace(transform29)

const externalLink2 = new Entity('externalLink2')
engine.addEntity(externalLink2)
externalLink2.setParent(_scene)
const transform30 = new Transform({
  position: new Vector3(5.617969036102295, 0, 0.6421348452568054),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
externalLink2.addComponentOrReplace(transform30)

const largeOrnamentedStoneRail4 = new Entity('largeOrnamentedStoneRail4')
engine.addEntity(largeOrnamentedStoneRail4)
largeOrnamentedStoneRail4.setParent(_scene)
largeOrnamentedStoneRail4.addComponentOrReplace(gltfShape5)
const transform31 = new Transform({
  position: new Vector3(10.445923805236816, 8, 15.448034286499023),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000028610229492, 1, 1.0000028610229492)
})
largeOrnamentedStoneRail4.addComponentOrReplace(transform31)

const largeOrnamentedStoneRail5 = new Entity('largeOrnamentedStoneRail5')
engine.addEntity(largeOrnamentedStoneRail5)
largeOrnamentedStoneRail5.setParent(_scene)
largeOrnamentedStoneRail5.addComponentOrReplace(gltfShape5)
const transform32 = new Transform({
  position: new Vector3(5.4522857666015625, 8, 15.446135520935059),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000026226043701, 1, 1.0000026226043701)
})
largeOrnamentedStoneRail5.addComponentOrReplace(transform32)

const largeOrnamentedStoneRail6 = new Entity('largeOrnamentedStoneRail6')
engine.addEntity(largeOrnamentedStoneRail6)
largeOrnamentedStoneRail6.setParent(_scene)
largeOrnamentedStoneRail6.addComponentOrReplace(gltfShape5)
const transform33 = new Transform({
  position: new Vector3(0.5384726524353027, 8, 15.444489479064941),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000033378601074, 1, 1.0000033378601074)
})
largeOrnamentedStoneRail6.addComponentOrReplace(transform33)

const plainText5 = new Entity('plainText5')
engine.addEntity(plainText5)
plainText5.setParent(_scene)
const transform34 = new Transform({
  position: new Vector3(15.552021026611328, 4, 7.742154121398926),
  rotation: new Quaternion(4.127578846475997e-15, -0.7071068286895752, 8.429368847373553e-8, -0.7071067690849304),
  scale: new Vector3(2.254326581954956, 2.455301284790039, 1)
})
plainText5.addComponentOrReplace(transform34)

const plainText7 = new Entity('plainText7')
engine.addEntity(plainText7)
plainText7.setParent(_scene)
const transform35 = new Transform({
  position: new Vector3(0.43378502130508423, 4, 8.174539566040039),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(2.1043899059295654, 2.0210916996002197, 1.0000019073486328)
})
plainText7.addComponentOrReplace(transform35)

const roundRug = new Entity('roundRug')
engine.addEntity(roundRug)
roundRug.setParent(_scene)
const transform36 = new Transform({
  position: new Vector3(8.103352546691895, 0, 6.634031295776367),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
roundRug.addComponentOrReplace(transform36)
const gltfShape6 = new GLTFShape("models/Carpet_01/Carpet_01.glb")
gltfShape6.withCollisions = true
gltfShape6.isPointerBlocker = true
gltfShape6.visible = true
roundRug.addComponentOrReplace(gltfShape6)

const imageFromURL9 = new Entity('imageFromURL9')
engine.addEntity(imageFromURL9)
imageFromURL9.setParent(_scene)
const transform37 = new Transform({
  position: new Vector3(0.8580684661865234, 9.046233177185059, 9.430729866027832),
  rotation: new Quaternion(2.1723472833404776e-15, -0.7071067094802856, 8.429368136830817e-8, -0.7071068286895752),
  scale: new Vector3(1.6676251888275146, 1.5, 0.9999986886978149)
})
imageFromURL9.addComponentOrReplace(transform37)

const plainText8 = new Entity('plainText8')
engine.addEntity(plainText8)
plainText8.setParent(_scene)
const transform38 = new Transform({
  position: new Vector3(0.9614465236663818, 10.759322166442871, 8.316187858581543),
  rotation: new Quaternion(-2.867056771030732e-14, -0.7371954917907715, 8.788057925812609e-8, -0.6756795644760132),
  scale: new Vector3(1.0000059604644775, 1, 1.0000059604644775)
})
plainText8.addComponentOrReplace(transform38)

const purpleNeonTube2 = new Entity('purpleNeonTube2')
engine.addEntity(purpleNeonTube2)
purpleNeonTube2.setParent(_scene)
const gltfShape7 = new GLTFShape("models/NeonLightTube_03/NeonLightTube_03.glb")
gltfShape7.withCollisions = true
gltfShape7.isPointerBlocker = true
gltfShape7.visible = true
purpleNeonTube2.addComponentOrReplace(gltfShape7)
const transform39 = new Transform({
  position: new Vector3(4.607299327850342, 3.8720407485961914, 0.48354238271713257),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
purpleNeonTube2.addComponentOrReplace(transform39)

const radioCyberpunk = new Entity('radioCyberpunk')
engine.addEntity(radioCyberpunk)
radioCyberpunk.setParent(_scene)
const transform40 = new Transform({
  position: new Vector3(11.425198554992676, 0, 14.673206329345703),
  rotation: new Quaternion(2.54163522537675e-15, 1, -1.1920928955078125e-7, -5.960464477539063e-8),
  scale: new Vector3(1.0000001192092896, 1, 1.0000001192092896)
})
radioCyberpunk.addComponentOrReplace(transform40)

const purpleNeonTube3 = new Entity('purpleNeonTube3')
engine.addEntity(purpleNeonTube3)
purpleNeonTube3.setParent(_scene)
purpleNeonTube3.addComponentOrReplace(gltfShape7)
const transform41 = new Transform({
  position: new Vector3(11.891290664672852, 3.8720407485961914, 0.6675707101821899),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
purpleNeonTube3.addComponentOrReplace(transform41)

const purpleNeonTube4 = new Entity('purpleNeonTube4')
engine.addEntity(purpleNeonTube4)
purpleNeonTube4.setParent(_scene)
purpleNeonTube4.addComponentOrReplace(gltfShape7)
const transform42 = new Transform({
  position: new Vector3(14.961267471313477, 3.8720407485961914, 4),
  rotation: new Quaternion(-7.079092679754392e-15, -0.7142105102539062, 8.514052751706913e-8, -0.6999310255050659),
  scale: new Vector3(1, 1, 1)
})
purpleNeonTube4.addComponentOrReplace(transform42)

const ambientSound = new Entity('ambientSound')
engine.addEntity(ambientSound)
ambientSound.setParent(_scene)
const transform43 = new Transform({
  position: new Vector3(8, 12.79961109161377, 0),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.5, 1, 1)
})
ambientSound.addComponentOrReplace(transform43)

const nftPictureFrame2 = new Entity('nftPictureFrame2')
engine.addEntity(nftPictureFrame2)
nftPictureFrame2.setParent(_scene)
const transform44 = new Transform({
  position: new Vector3(0.9252119064331055, 1.07828950881958, 5.5),
  rotation: new Quaternion(-2.4085271740892887e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(3.750005006790161, 3.75, 1.0000030994415283)
})
nftPictureFrame2.addComponentOrReplace(transform44)

const nftPictureFrame3 = new Entity('nftPictureFrame3')
engine.addEntity(nftPictureFrame3)
nftPictureFrame3.setParent(_scene)
const transform45 = new Transform({
  position: new Vector3(0.9252119064331055, 1.07828950881958, 2.3165366649627686),
  rotation: new Quaternion(-2.4085271740892887e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(3.750006675720215, 3.75, 1.0000033378601074)
})
nftPictureFrame3.addComponentOrReplace(transform45)

const purpleNeonTube5 = new Entity('purpleNeonTube5')
engine.addEntity(purpleNeonTube5)
purpleNeonTube5.setParent(_scene)
purpleNeonTube5.addComponentOrReplace(gltfShape7)
const transform46 = new Transform({
  position: new Vector3(0.9929933547973633, 3.8720407485961914, 4),
  rotation: new Quaternion(-7.079092679754392e-15, -0.7142105102539062, 8.514052751706913e-8, -0.6999310255050659),
  scale: new Vector3(1.000000238418579, 1, 1.000000238418579)
})
purpleNeonTube5.addComponentOrReplace(transform46)

const grassTile5 = new Entity('grassTile5')
engine.addEntity(grassTile5)
grassTile5.setParent(_scene)
grassTile5.addComponentOrReplace(gltfShape4)
const transform47 = new Transform({
  position: new Vector3(3.40228271484375, 7.875885009765625, 7.8280744552612305),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.7439682483673096, 1, 7.589516639709473)
})
grassTile5.addComponentOrReplace(transform47)

const grassTile6 = new Entity('grassTile6')
engine.addEntity(grassTile6)
grassTile6.setParent(_scene)
grassTile6.addComponentOrReplace(gltfShape4)
const transform48 = new Transform({
  position: new Vector3(8.121557235717773, 7.875885009765625, 11.902769088745117),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.991341471672058, 1, 3.5406391620635986)
})
grassTile6.addComponentOrReplace(transform48)

const grassTile7 = new Entity('grassTile7')
engine.addEntity(grassTile7)
grassTile7.setParent(_scene)
grassTile7.addComponentOrReplace(gltfShape4)
const transform49 = new Transform({
  position: new Vector3(8.13612174987793, 7.875885009765625, 2.7519359588623047),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.991341471672058, 1, 2.3896045684814453)
})
grassTile7.addComponentOrReplace(transform49)

const grassTile8 = new Entity('grassTile8')
engine.addEntity(grassTile8)
grassTile8.setParent(_scene)
grassTile8.addComponentOrReplace(gltfShape4)
const transform50 = new Transform({
  position: new Vector3(12.738037109375, 7.875885009765625, 7.798883438110352),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.7439682483673096, 1, 7.595478057861328)
})
grassTile8.addComponentOrReplace(transform50)

const wallPlainBeige11 = new Entity('wallPlainBeige11')
engine.addEntity(wallPlainBeige11)
wallPlainBeige11.setParent(_scene)
wallPlainBeige11.addComponentOrReplace(gltfShape2)
const transform51 = new Transform({
  position: new Vector3(0.49448299407958984, 7.878091812133789, 15.533138275146484),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(7.63361120223999, 0.9716616272926331, 1.000011920928955)
})
wallPlainBeige11.addComponentOrReplace(transform51)

const wallPlainBeige12 = new Entity('wallPlainBeige12')
engine.addEntity(wallPlainBeige12)
wallPlainBeige12.setParent(_scene)
wallPlainBeige12.addComponentOrReplace(gltfShape2)
const transform52 = new Transform({
  position: new Vector3(15.234710693359375, 7.8902812004089355, 15.39966869354248),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(7.633634090423584, 0.979423999786377, 1.0000147819519043)
})
wallPlainBeige12.addComponentOrReplace(transform52)

const roofSimple = new Entity('roofSimple')
engine.addEntity(roofSimple)
roofSimple.setParent(_scene)
const transform53 = new Transform({
  position: new Vector3(14.854784965515137, 7.742319107055664, 15.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(3.3733227252960205, 1, 3.816356658935547)
})
roofSimple.addComponentOrReplace(transform53)
const gltfShape8 = new GLTFShape("models/SimpleRoof.glb")
gltfShape8.withCollisions = true
gltfShape8.isPointerBlocker = true
gltfShape8.visible = true
roofSimple.addComponentOrReplace(gltfShape8)

const wallPlainBeige13 = new Entity('wallPlainBeige13')
engine.addEntity(wallPlainBeige13)
wallPlainBeige13.setParent(_scene)
wallPlainBeige13.addComponentOrReplace(gltfShape2)
const transform54 = new Transform({
  position: new Vector3(6.996547698974609, 4, 0.371711403131485),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(3.2515835762023926, 1, 0.9999999403953552)
})
wallPlainBeige13.addComponentOrReplace(transform54)

const wallPlainBeige14 = new Entity('wallPlainBeige14')
engine.addEntity(wallPlainBeige14)
wallPlainBeige14.setParent(_scene)
wallPlainBeige14.addComponentOrReplace(gltfShape2)
const transform55 = new Transform({
  position: new Vector3(15.484457015991211, 4, 0.3501098155975342),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(3.2515835762023926, 1, 0.9999999403953552)
})
wallPlainBeige14.addComponentOrReplace(transform55)

const windowBeigeLarge = new Entity('windowBeigeLarge')
engine.addEntity(windowBeigeLarge)
windowBeigeLarge.setParent(_scene)
const transform56 = new Transform({
  position: new Vector3(9, 4, 0.35935676097869873),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
windowBeigeLarge.addComponentOrReplace(transform56)
const gltfShape9 = new GLTFShape("models/BeigeWindowLarge.glb")
gltfShape9.withCollisions = true
gltfShape9.isPointerBlocker = true
gltfShape9.visible = true
windowBeigeLarge.addComponentOrReplace(gltfShape9)

const wallPlainBeige15 = new Entity('wallPlainBeige15')
engine.addEntity(wallPlainBeige15)
wallPlainBeige15.setParent(_scene)
wallPlainBeige15.addComponentOrReplace(gltfShape2)
const transform57 = new Transform({
  position: new Vector3(15.528597831726074, 4, 15.506584167480469),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(3.2515835762023926, 1, 0.9999999403953552)
})
wallPlainBeige15.addComponentOrReplace(transform57)

const wallPlainBeige16 = new Entity('wallPlainBeige16')
engine.addEntity(wallPlainBeige16)
wallPlainBeige16.setParent(_scene)
wallPlainBeige16.addComponentOrReplace(gltfShape2)
const transform58 = new Transform({
  position: new Vector3(7.09949254989624, 4, 15.519172668457031),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(3.2515835762023926, 1, 0.9999999403953552)
})
wallPlainBeige16.addComponentOrReplace(transform58)

const windowBeigeLarge2 = new Entity('windowBeigeLarge2')
engine.addEntity(windowBeigeLarge2)
windowBeigeLarge2.setParent(_scene)
windowBeigeLarge2.addComponentOrReplace(gltfShape9)
const transform59 = new Transform({
  position: new Vector3(9.090570449829102, 4, 15.515581130981445),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
windowBeigeLarge2.addComponentOrReplace(transform59)

const nftPictureFrame4 = new Entity('nftPictureFrame4')
engine.addEntity(nftPictureFrame4)
nftPictureFrame4.setParent(_scene)
const transform60 = new Transform({
  position: new Vector3(0.9252119064331055, 1.07828950881958, 13.332785606384277),
  rotation: new Quaternion(-2.4085271740892887e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(3.7500059604644775, 3.75, 1.0000033378601074)
})
nftPictureFrame4.addComponentOrReplace(transform60)

const discordButtonLink = new Entity('discordButtonLink')
engine.addEntity(discordButtonLink)
discordButtonLink.setParent(_scene)
const transform61 = new Transform({
  position: new Vector3(2.898128032684326, 0, 0.39682674407958984),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
discordButtonLink.addComponentOrReplace(transform61)

const imageFromURL6 = new Entity('imageFromURL6')
engine.addEntity(imageFromURL6)
imageFromURL6.setParent(_scene)
const transform62 = new Transform({
  position: new Vector3(13.326037406921387, 1.1025651693344116, 0.4313584566116333),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.7306506633758545, 1.5452585220336914, 1)
})
imageFromURL6.addComponentOrReplace(transform62)

const externalLink3 = new Entity('externalLink3')
engine.addEntity(externalLink3)
externalLink3.setParent(_scene)
const transform63 = new Transform({
  position: new Vector3(13.391874313354492, 0, 0.467610239982605),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
externalLink3.addComponentOrReplace(transform63)

const purpleNeonTube6 = new Entity('purpleNeonTube6')
engine.addEntity(purpleNeonTube6)
purpleNeonTube6.setParent(_scene)
purpleNeonTube6.addComponentOrReplace(gltfShape7)
const transform64 = new Transform({
  position: new Vector3(0.9929933547973633, 3.8720407485961914, 11.697091102600098),
  rotation: new Quaternion(-7.079092679754392e-15, -0.7142105102539062, 8.514052751706913e-8, -0.6999310255050659),
  scale: new Vector3(1.0000007152557373, 1, 1.0000007152557373)
})
purpleNeonTube6.addComponentOrReplace(transform64)

const wallPlainBeige9 = new Entity('wallPlainBeige9')
engine.addEntity(wallPlainBeige9)
wallPlainBeige9.setParent(_scene)
wallPlainBeige9.addComponentOrReplace(gltfShape2)
const transform65 = new Transform({
  position: new Vector3(0.4950704574584961, 4, 15.522404670715332),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(3.2296884059906006, 1, 1.0000030994415283)
})
wallPlainBeige9.addComponentOrReplace(transform65)

const wallPlainBeige17 = new Entity('wallPlainBeige17')
engine.addEntity(wallPlainBeige17)
wallPlainBeige17.setParent(_scene)
wallPlainBeige17.addComponentOrReplace(gltfShape2)
const transform66 = new Transform({
  position: new Vector3(0.501551628112793, 4, 7.071194171905518),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(3.3753163814544678, 1, 1.0000078678131104)
})
wallPlainBeige17.addComponentOrReplace(transform66)

const windowBeigeLarge3 = new Entity('windowBeigeLarge3')
engine.addEntity(windowBeigeLarge3)
windowBeigeLarge3.setParent(_scene)
const transform67 = new Transform({
  position: new Vector3(0.4933128356933594, 3.998077392578125, 9.068136215209961),
  rotation: new Quaternion(-1.2854492598192457e-15, -0.7071068286895752, 8.429370268459024e-8, 0.7071068286895752),
  scale: new Vector3(1.000004529953003, 1, 1.000004529953003)
})
windowBeigeLarge3.addComponentOrReplace(transform67)
windowBeigeLarge3.addComponentOrReplace(gltfShape9)

const nftPictureFrame5 = new Entity('nftPictureFrame5')
engine.addEntity(nftPictureFrame5)
nftPictureFrame5.setParent(_scene)
const transform68 = new Transform({
  position: new Vector3(15.144025802612305, 1.07828950881958, 5.382571697235107),
  rotation: new Quaternion(6.314949953201924e-15, -0.7071067690849304, 8.429368847373553e-8, 0.7071068286895752),
  scale: new Vector3(3.7500081062316895, 3.75, 1.0000035762786865)
})
nftPictureFrame5.addComponentOrReplace(transform68)

const nftPictureFrame6 = new Entity('nftPictureFrame6')
engine.addEntity(nftPictureFrame6)
nftPictureFrame6.setParent(_scene)
const transform69 = new Transform({
  position: new Vector3(15.144025802612305, 1.07828950881958, 2.1474709510803223),
  rotation: new Quaternion(6.314949953201924e-15, -0.7071067690849304, 8.429368847373553e-8, 0.7071068286895752),
  scale: new Vector3(3.7500081062316895, 3.75, 1.0000035762786865)
})
nftPictureFrame6.addComponentOrReplace(transform69)

const nftPictureFrame7 = new Entity('nftPictureFrame7')
engine.addEntity(nftPictureFrame7)
nftPictureFrame7.setParent(_scene)
const transform70 = new Transform({
  position: new Vector3(2.4460537433624268, 1.07828950881958, 15.178576469421387),
  rotation: new Quaternion(-2.4149385782252933e-15, 1, -1.1920927533992653e-7, 0),
  scale: new Vector3(3.750009775161743, 3.75, 1.0000042915344238)
})
nftPictureFrame7.addComponentOrReplace(transform70)

const nftPictureFrame8 = new Entity('nftPictureFrame8')
engine.addEntity(nftPictureFrame8)
nftPictureFrame8.setParent(_scene)
const transform71 = new Transform({
  position: new Vector3(5.451657295227051, 1.07828950881958, 15.178576469421387),
  rotation: new Quaternion(-2.4149385782252933e-15, 1, -1.1920927533992653e-7, 0),
  scale: new Vector3(3.750009775161743, 3.75, 1.0000042915344238)
})
nftPictureFrame8.addComponentOrReplace(transform71)

const nftPictureFrame9 = new Entity('nftPictureFrame9')
engine.addEntity(nftPictureFrame9)
nftPictureFrame9.setParent(_scene)
const transform72 = new Transform({
  position: new Vector3(10.517875671386719, 1.07828950881958, 15.178576469421387),
  rotation: new Quaternion(-2.4149385782252933e-15, 1, -1.1920927533992653e-7, 0),
  scale: new Vector3(3.750009775161743, 3.75, 1.0000042915344238)
})
nftPictureFrame9.addComponentOrReplace(transform72)

const nftPictureFrame10 = new Entity('nftPictureFrame10')
engine.addEntity(nftPictureFrame10)
nftPictureFrame10.setParent(_scene)
const transform73 = new Transform({
  position: new Vector3(13.416975021362305, 1.07828950881958, 15.178576469421387),
  rotation: new Quaternion(-2.4149385782252933e-15, 1, -1.1920927533992653e-7, 0),
  scale: new Vector3(3.750009775161743, 3.75, 1.0000042915344238)
})
nftPictureFrame10.addComponentOrReplace(transform73)

const purpleNeonTube = new Entity('purpleNeonTube')
engine.addEntity(purpleNeonTube)
purpleNeonTube.setParent(_scene)
purpleNeonTube.addComponentOrReplace(gltfShape7)
const transform74 = new Transform({
  position: new Vector3(11.891290664672852, 3.8720407485961914, 15.023805618286133),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
purpleNeonTube.addComponentOrReplace(transform74)

const purpleNeonTube7 = new Entity('purpleNeonTube7')
engine.addEntity(purpleNeonTube7)
purpleNeonTube7.setParent(_scene)
purpleNeonTube7.addComponentOrReplace(gltfShape7)
const transform75 = new Transform({
  position: new Vector3(4.055065631866455, 3.8720407485961914, 15.023805618286133),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
purpleNeonTube7.addComponentOrReplace(transform75)

const imageFromURL4 = new Entity('imageFromURL4')
engine.addEntity(imageFromURL4)
imageFromURL4.setParent(_scene)
const transform76 = new Transform({
  position: new Vector3(0.8256596922874451, 9.079670906066895, 6.921086311340332),
  rotation: new Quaternion(-2.517907503183552e-15, 0.7071067094802856, -8.429368136830817e-8, 0.70710688829422),
  scale: new Vector3(1.6676278114318848, 1.5, 1)
})
imageFromURL4.addComponentOrReplace(transform76)

const channelId = Math.random().toString(16).slice(2)
const channelBus = new MessageBus()
const inventory = createInventory(UICanvas, UIContainerStack, UIImage)
const options = { inventory }

const script1 = new Script1()
const script2 = new Script2()
const script3 = new Script3()
const script4 = new Script4()
const script5 = new Script5()
const script6 = new Script6()
const script7 = new Script7()
const script8 = new Script8()
script1.init(options)
script2.init(options)
script3.init(options)
script4.init(options)
script5.init(options)
script6.init(options)
script7.init(options)
script8.init(options)
script1.spawn(verticalBluePad, {"distance":9,"speed":5,"autoStart":true,"onReachEnd":[{"entityName":"verticalBluePad","actionId":"goToStart","values":{}}],"onReachStart":[{"entityName":"verticalBluePad","actionId":"goToEnd","values":{}}]}, createChannel(channelId, verticalBluePad, channelBus))
script2.spawn(nftPictureFrame, {"id":"22517697188193012886809958570219377889657731125293874382192930970925383392043","contract":"0x2a187453064356c898cae034eaed119e1663acb8","style":"Canvas","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame, channelBus))
script3.spawn(imageFromURL, {"image":"https://i.imgur.com/leVbVto.jpg"}, createChannel(channelId, imageFromURL, channelBus))
script4.spawn(plainText, {"text":"NFT Art for Sale","font":"SF_Heavy","color":"#FFFFFF"}, createChannel(channelId, plainText, channelBus))
script5.spawn(externalLink, {"url":"https://thehollowcircle.bandcamp.com","name":"Listen on Bandcamp"}, createChannel(channelId, externalLink, channelBus))
script3.spawn(imageFromURL2, {"image":"https://i.imgur.com/0wItRbt.png"}, createChannel(channelId, imageFromURL2, channelBus))
script3.spawn(imageFromURL3, {"image":"https://i.imgur.com/uiM0vT2.jpg"}, createChannel(channelId, imageFromURL3, channelBus))
script5.spawn(externalLink2, {"url":"https://associazioneculturadigitale.org/","name":"Italian Crypto Association"}, createChannel(channelId, externalLink2, channelBus))
script4.spawn(plainText5, {"text":"Crypto Culture","font":"SF_Heavy","color":"#FFFFFF"}, createChannel(channelId, plainText5, channelBus))
script4.spawn(plainText7, {"text":"Digital Music and Art","font":"SF_Heavy","color":"#FFFFFF"}, createChannel(channelId, plainText7, channelBus))
script3.spawn(imageFromURL9, {"image":"https://i.imgur.com/0wItRbt.png"}, createChannel(channelId, imageFromURL9, channelBus))
script4.spawn(plainText8, {"text":"Meeting Space","font":"SF_Heavy","color":"#FFFFFF"}, createChannel(channelId, plainText8, channelBus))
script6.spawn(radioCyberpunk, {"startOn":false,"volume":0.89,"onClickText":"Radio On/Off","onClick":[{"entityName":"radioCyberpunk","actionId":"toggle","values":{}}],"station":"https://edge.singsingmusic.net/MC2.mp3"}, createChannel(channelId, radioCyberpunk, channelBus))
script7.spawn(ambientSound, {"sound":"Birds","active":true,"loop":true}, createChannel(channelId, ambientSound, channelBus))
script2.spawn(nftPictureFrame2, {"id":"27575328850313694755625005541381465731436274852473056079670032380803546087425","contract":"0x495f947276749ce646f68ac8c248420045cb7b5e","style":"Canvas","color":"#000000","ui":true}, createChannel(channelId, nftPictureFrame2, channelBus))
script2.spawn(nftPictureFrame3, {"id":"27575328850313694755625005541381465731436274852473056079670032404992801898497","contract":"0x495f947276749ce646f68ac8c248420045cb7b5e","style":"Canvas","color":"#000000","ui":true}, createChannel(channelId, nftPictureFrame3, channelBus))
script2.spawn(nftPictureFrame4, {"id":"27575328850313694755625005541381465731436274852473056079670032393997685620737","contract":"0x495f947276749ce646f68ac8c248420045cb7b5e","style":"Canvas","color":"#000000","ui":true}, createChannel(channelId, nftPictureFrame4, channelBus))
script8.spawn(discordButtonLink, {"url":"https://discord.gg/Kbz89gU5","bnw":false}, createChannel(channelId, discordButtonLink, channelBus))
script3.spawn(imageFromURL6, {"image":"https://i.imgur.com/tzyyotJ.jpg"}, createChannel(channelId, imageFromURL6, channelBus))
script5.spawn(externalLink3, {"url":"https://dharmafire.bandcamp.com","name":"Listen on Bandcamp"}, createChannel(channelId, externalLink3, channelBus))
script2.spawn(nftPictureFrame5, {"id":"114198136002386841007502003999812361493238322180643019925096946045527758209025","contract":"0x495f947276749ce646f68ac8c248420045cb7b5e","style":"Canvas","color":"#000000","ui":true}, createChannel(channelId, nftPictureFrame5, channelBus))
script2.spawn(nftPictureFrame6, {"id":"114198136002386841007502003999812361493238322180643019925096946049925804720129","contract":"0x495f947276749ce646f68ac8c248420045cb7b5e","style":"Canvas","color":"#000000","ui":true}, createChannel(channelId, nftPictureFrame6, channelBus))
script2.spawn(nftPictureFrame7, {"id":"27575328850313694755625005541381465731436274852473056079670032412689383292929","contract":"0x495f947276749ce646f68ac8c248420045cb7b5e","style":"Canvas","color":"#000000","ui":true}, createChannel(channelId, nftPictureFrame7, channelBus))
script2.spawn(nftPictureFrame8, {"id":"27575328850313694755625005541381465731436274852473056079670032408291336781825","contract":"0x495f947276749ce646f68ac8c248420045cb7b5e","style":"Canvas","color":"#000000","ui":true}, createChannel(channelId, nftPictureFrame8, channelBus))
script2.spawn(nftPictureFrame9, {"id":"27575328850313694755625005541381465731436274852473056079670032388500127481857","contract":"0x495f947276749ce646f68ac8c248420045cb7b5e","style":"Canvas","color":"#000000","ui":true}, createChannel(channelId, nftPictureFrame9, channelBus))
script2.spawn(nftPictureFrame10, {"id":"27575328850313694755625005541381465731436274852473056079670032399495243759617","contract":"0x495f947276749ce646f68ac8c248420045cb7b5e","style":"Canvas","color":"#000000","ui":true}, createChannel(channelId, nftPictureFrame10, channelBus))
script3.spawn(imageFromURL4, {"image":"https://i.imgur.com/uiM0vT2.jpg"}, createChannel(channelId, imageFromURL4, channelBus))
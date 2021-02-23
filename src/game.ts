import { createChannel } from '../node_modules/decentraland-builder-scripts/channel'
import { createInventory } from '../node_modules/decentraland-builder-scripts/inventory'
import Script1 from "../c72c3d45-0309-4834-84df-7b5f517694fa/src/item"
import Script2 from "../80d9cb1c-2fcf-4585-8e19-e2d5621fd54d/src/item"
import Script3 from "../7d669c08-c354-45e4-b3a3-c915c8fd6b6e/src/item"
import Script4 from "../ab84996d-dcdc-429c-818e-a7640239c803/src/item"
import Script5 from "../b88efbbf-2a9a-47b4-86e1-e38ecc2b433b/src/item"
import Script6 from "../d5ee9a47-8484-4824-a609-996298830b51/src/item"

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
  position: new Vector3(15.528597831726074, 0, 15.506584167480469),
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
  position: new Vector3(0.49234455823898315, 0, 7.071194171905518),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(3.3753039836883545, 1, 1.0000061988830566)
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
  position: new Vector3(0.4973585605621338, 0, 9.068353652954102),
  rotation: new Quaternion(2.262906752104987e-16, 0.7071068286895752, -8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(1.0000059604644775, 1, 1.0000059604644775)
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

const wallPlainBeige9 = new Entity('wallPlainBeige9')
engine.addEntity(wallPlainBeige9)
wallPlainBeige9.setParent(_scene)
wallPlainBeige9.addComponentOrReplace(gltfShape2)
const transform19 = new Transform({
  position: new Vector3(0.49448299407958984, 4, 15.533138275146484),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(7.633601665496826, 0.9716616272926331, 1.0000107288360596)
})
wallPlainBeige9.addComponentOrReplace(transform19)

const wallPlainBeige10 = new Entity('wallPlainBeige10')
engine.addEntity(wallPlainBeige10)
wallPlainBeige10.setParent(_scene)
wallPlainBeige10.addComponentOrReplace(gltfShape2)
const transform20 = new Transform({
  position: new Vector3(15.234710693359375, 4, 15.39966869354248),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(7.633630275726318, 0.979423999786377, 1.000014305114746)
})
wallPlainBeige10.addComponentOrReplace(transform20)

const verticalBluePad = new Entity('verticalBluePad')
engine.addEntity(verticalBluePad)
verticalBluePad.setParent(_scene)
const transform21 = new Transform({
  position: new Vector3(8.133349418640137, 0, 6.641632080078125),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.5, 1, 1.5)
})
verticalBluePad.addComponentOrReplace(transform21)

const largeOrnamentedStoneRail = new Entity('largeOrnamentedStoneRail')
engine.addEntity(largeOrnamentedStoneRail)
largeOrnamentedStoneRail.setParent(_scene)
const transform22 = new Transform({
  position: new Vector3(10.481276512145996, 4, 0.3023918867111206),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000019073486328, 1, 1.0000019073486328)
})
largeOrnamentedStoneRail.addComponentOrReplace(transform22)
const gltfShape5 = new GLTFShape("models/FenceStoneLarge_01/FenceStoneLarge_01.glb")
gltfShape5.withCollisions = true
gltfShape5.isPointerBlocker = true
gltfShape5.visible = true
largeOrnamentedStoneRail.addComponentOrReplace(gltfShape5)

const largeOrnamentedStoneRail2 = new Entity('largeOrnamentedStoneRail2')
engine.addEntity(largeOrnamentedStoneRail2)
largeOrnamentedStoneRail2.setParent(_scene)
largeOrnamentedStoneRail2.addComponentOrReplace(gltfShape5)
const transform23 = new Transform({
  position: new Vector3(5.542966365814209, 4, 0.31146660447120667),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000030994415283, 1, 1.0000030994415283)
})
largeOrnamentedStoneRail2.addComponentOrReplace(transform23)

const largeOrnamentedStoneRail3 = new Entity('largeOrnamentedStoneRail3')
engine.addEntity(largeOrnamentedStoneRail3)
largeOrnamentedStoneRail3.setParent(_scene)
largeOrnamentedStoneRail3.addComponentOrReplace(gltfShape5)
const transform24 = new Transform({
  position: new Vector3(0.5482223033905029, 4, 0.3080415427684784),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000042915344238, 1, 1.0000042915344238)
})
largeOrnamentedStoneRail3.addComponentOrReplace(transform24)

const nftPictureFrame = new Entity('nftPictureFrame')
engine.addEntity(nftPictureFrame)
nftPictureFrame.setParent(_scene)
const transform25 = new Transform({
  position: new Vector3(13.652267456054688, 1.0834589004516602, 0.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(3.644871950149536, 2.8222129344940186, 1.0000001192092896)
})
nftPictureFrame.addComponentOrReplace(transform25)

const imageFromURL = new Entity('imageFromURL')
engine.addEntity(imageFromURL)
imageFromURL.setParent(_scene)
const transform26 = new Transform({
  position: new Vector3(10.826037406921387, 0.8332167863845825, 0.6838761568069458),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.123384475708008, 2, 1)
})
imageFromURL.addComponentOrReplace(transform26)

const plainText = new Entity('plainText')
engine.addEntity(plainText)
plainText.setParent(_scene)
const transform27 = new Transform({
  position: new Vector3(7.985114574432373, 3.3403847217559814, 15.60966968536377),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(5, 3.5, 1)
})
plainText.addComponentOrReplace(transform27)

const externalLink = new Entity('externalLink')
engine.addEntity(externalLink)
externalLink.setParent(_scene)
const transform28 = new Transform({
  position: new Vector3(10.775582313537598, 0, 0.74090975522995),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
externalLink.addComponentOrReplace(transform28)

const imageFromURL2 = new Entity('imageFromURL2')
engine.addEntity(imageFromURL2)
imageFromURL2.setParent(_scene)
const transform29 = new Transform({
  position: new Vector3(5.679545879364014, 1.1756607294082642, 0.5778308510780334),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.6676278114318848, 1.5, 1)
})
imageFromURL2.addComponentOrReplace(transform29)

const imageFromURL3 = new Entity('imageFromURL3')
engine.addEntity(imageFromURL3)
imageFromURL3.setParent(_scene)
const transform30 = new Transform({
  position: new Vector3(2.9838809967041016, 1.1756607294082642, 0.5104790925979614),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.6676278114318848, 1.5, 1)
})
imageFromURL3.addComponentOrReplace(transform30)

const externalLink2 = new Entity('externalLink2')
engine.addEntity(externalLink2)
externalLink2.setParent(_scene)
const transform31 = new Transform({
  position: new Vector3(5.617969036102295, 0, 0.6421348452568054),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
externalLink2.addComponentOrReplace(transform31)

const externalLink3 = new Entity('externalLink3')
engine.addEntity(externalLink3)
externalLink3.setParent(_scene)
const transform32 = new Transform({
  position: new Vector3(2.8511388301849365, 0, 0.5728570818901062),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
externalLink3.addComponentOrReplace(transform32)

const imageFromURL4 = new Entity('imageFromURL4')
engine.addEntity(imageFromURL4)
imageFromURL4.setParent(_scene)
const transform33 = new Transform({
  position: new Vector3(15, 1.5, 2.5041708946228027),
  rotation: new Quaternion(-3.1372812876219458e-15, -0.7071068286895752, 8.429368847373553e-8, 0.7071067690849304),
  scale: new Vector3(2.204746723175049, 1.5, 1)
})
imageFromURL4.addComponentOrReplace(transform33)

const instagramButtonLink = new Entity('instagramButtonLink')
engine.addEntity(instagramButtonLink)
instagramButtonLink.setParent(_scene)
const transform34 = new Transform({
  position: new Vector3(15, 0, 3.86470365524292),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000014305114746, 1, 1.0000014305114746)
})
instagramButtonLink.addComponentOrReplace(transform34)

const imageFromURL5 = new Entity('imageFromURL5')
engine.addEntity(imageFromURL5)
imageFromURL5.setParent(_scene)
const transform35 = new Transform({
  position: new Vector3(15, 1.5, 5.458990573883057),
  rotation: new Quaternion(-3.1372812876219458e-15, -0.7071068286895752, 8.429368847373553e-8, 0.7071067690849304),
  scale: new Vector3(2.204746723175049, 1.5, 1)
})
imageFromURL5.addComponentOrReplace(transform35)

const plainText2 = new Entity('plainText2')
engine.addEntity(plainText2)
plainText2.setParent(_scene)
const transform36 = new Transform({
  position: new Vector3(0.9269242286682129, 2, 3.9052820205688477),
  rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000042915344238, 1, 1.0000042915344238)
})
plainText2.addComponentOrReplace(transform36)

const plainText3 = new Entity('plainText3')
engine.addEntity(plainText3)
plainText3.setParent(_scene)
const transform37 = new Transform({
  position: new Vector3(13.651341438293457, 2.7337052822113037, 0.5266890525817871),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
plainText3.addComponentOrReplace(transform37)

const largeOrnamentedStoneRail4 = new Entity('largeOrnamentedStoneRail4')
engine.addEntity(largeOrnamentedStoneRail4)
largeOrnamentedStoneRail4.setParent(_scene)
largeOrnamentedStoneRail4.addComponentOrReplace(gltfShape5)
const transform38 = new Transform({
  position: new Vector3(10.445923805236816, 4, 15.448034286499023),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000026226043701, 1, 1.0000026226043701)
})
largeOrnamentedStoneRail4.addComponentOrReplace(transform38)

const largeOrnamentedStoneRail5 = new Entity('largeOrnamentedStoneRail5')
engine.addEntity(largeOrnamentedStoneRail5)
largeOrnamentedStoneRail5.setParent(_scene)
largeOrnamentedStoneRail5.addComponentOrReplace(gltfShape5)
const transform39 = new Transform({
  position: new Vector3(5.4522857666015625, 4, 15.446135520935059),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.000002384185791, 1, 1.000002384185791)
})
largeOrnamentedStoneRail5.addComponentOrReplace(transform39)

const largeOrnamentedStoneRail6 = new Entity('largeOrnamentedStoneRail6')
engine.addEntity(largeOrnamentedStoneRail6)
largeOrnamentedStoneRail6.setParent(_scene)
largeOrnamentedStoneRail6.addComponentOrReplace(gltfShape5)
const transform40 = new Transform({
  position: new Vector3(0.5384728908538818, 4, 15.444489479064941),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000030994415283, 1, 1.0000030994415283)
})
largeOrnamentedStoneRail6.addComponentOrReplace(transform40)

const nftPictureFrame2 = new Entity('nftPictureFrame2')
engine.addEntity(nftPictureFrame2)
nftPictureFrame2.setParent(_scene)
const transform41 = new Transform({
  position: new Vector3(15.151111602783203, 1.0299031734466553, 10.57243824005127),
  rotation: new Quaternion(-1.9455749640203465e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(3.486234426498413, 3.642139434814453, 1.0000054836273193)
})
nftPictureFrame2.addComponentOrReplace(transform41)

const nftPictureFrame3 = new Entity('nftPictureFrame3')
engine.addEntity(nftPictureFrame3)
nftPictureFrame3.setParent(_scene)
const transform42 = new Transform({
  position: new Vector3(15.151111602783203, 1.0299031734466553, 13.247239112854004),
  rotation: new Quaternion(-1.9455749640203465e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(3.262812614440918, 3.642139434814453, 1.0000057220458984)
})
nftPictureFrame3.addComponentOrReplace(transform42)

const plainText4 = new Entity('plainText4')
engine.addEntity(plainText4)
plainText4.setParent(_scene)
const transform43 = new Transform({
  position: new Vector3(15.180009841918945, 3.025329113006592, 12.09438705444336),
  rotation: new Quaternion(-1.678595896518185e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000078678131104, 1, 1.0000078678131104)
})
plainText4.addComponentOrReplace(transform43)

const redBicycle = new Entity('redBicycle')
engine.addEntity(redBicycle)
redBicycle.setParent(_scene)
const transform44 = new Transform({
  position: new Vector3(12.454172134399414, 0, 14.705887794494629),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
redBicycle.addComponentOrReplace(transform44)
const gltfShape6 = new GLTFShape("models/Bicycle_01/Bicycle_01.glb")
gltfShape6.withCollisions = true
gltfShape6.isPointerBlocker = true
gltfShape6.visible = true
redBicycle.addComponentOrReplace(gltfShape6)

const plainText5 = new Entity('plainText5')
engine.addEntity(plainText5)
plainText5.setParent(_scene)
const transform45 = new Transform({
  position: new Vector3(15.552021026611328, 4, 7.742154121398926),
  rotation: new Quaternion(4.127578846475997e-15, -0.7071068286895752, 8.429368847373553e-8, -0.7071067690849304),
  scale: new Vector3(2.254326581954956, 2.455301284790039, 1)
})
plainText5.addComponentOrReplace(transform45)

const plainText6 = new Entity('plainText6')
engine.addEntity(plainText6)
plainText6.setParent(_scene)
const transform46 = new Transform({
  position: new Vector3(0.5, 4, 8.12833309173584),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.8237192630767822, 1.6726186275482178, 1.0000016689300537)
})
plainText6.addComponentOrReplace(transform46)

const imageFromURL6 = new Entity('imageFromURL6')
engine.addEntity(imageFromURL6)
imageFromURL6.setParent(_scene)
const transform47 = new Transform({
  position: new Vector3(2.651942014694214, 1.3535577058792114, 15.136395454406738),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.8186308145523071, 1.6040291786193848, 1)
})
imageFromURL6.addComponentOrReplace(transform47)

const imageFromURL7 = new Entity('imageFromURL7')
engine.addEntity(imageFromURL7)
imageFromURL7.setParent(_scene)
const transform48 = new Transform({
  position: new Vector3(5.576249122619629, 1.357498049736023, 15.136395454406738),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.8186308145523071, 1.6040291786193848, 1)
})
imageFromURL7.addComponentOrReplace(transform48)

const instagramButtonLink2 = new Entity('instagramButtonLink2')
engine.addEntity(instagramButtonLink2)
instagramButtonLink2.setParent(_scene)
const transform49 = new Transform({
  position: new Vector3(4, 0, 15.097014427185059),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
instagramButtonLink2.addComponentOrReplace(transform49)

const imageFromURL8 = new Entity('imageFromURL8')
engine.addEntity(imageFromURL8)
imageFromURL8.setParent(_scene)
const transform50 = new Transform({
  position: new Vector3(0.8491172790527344, 1.3503278493881226, 11.758785247802734),
  rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(2.1233878135681152, 1.8336119651794434, 1.0000016689300537)
})
imageFromURL8.addComponentOrReplace(transform50)

const plainText7 = new Entity('plainText7')
engine.addEntity(plainText7)
plainText7.setParent(_scene)
const transform51 = new Transform({
  position: new Vector3(0.43378502130508423, 4, 8.174539566040039),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(2.1043899059295654, 2.0210916996002197, 1.0000019073486328)
})
plainText7.addComponentOrReplace(transform51)

const externalLink4 = new Entity('externalLink4')
engine.addEntity(externalLink4)
externalLink4.setParent(_scene)
const transform52 = new Transform({
  position: new Vector3(0.9664983749389648, 0, 11.768389701843262),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000009536743164, 1, 1.0000009536743164)
})
externalLink4.addComponentOrReplace(transform52)

const roofSimple = new Entity('roofSimple')
engine.addEntity(roofSimple)
roofSimple.setParent(_scene)
const transform53 = new Transform({
  position: new Vector3(14.673070907592773, 0.5457992553710938, 15.348174095153809),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(3.319796562194824, 1.809790849685669, 3.7217824459075928)
})
roofSimple.addComponentOrReplace(transform53)
const gltfShape7 = new GLTFShape("models/SimpleRoof.glb")
gltfShape7.withCollisions = true
gltfShape7.isPointerBlocker = true
gltfShape7.visible = true
roofSimple.addComponentOrReplace(gltfShape7)

const roundRug = new Entity('roundRug')
engine.addEntity(roundRug)
roundRug.setParent(_scene)
const transform54 = new Transform({
  position: new Vector3(8.103352546691895, 0, 6.634031295776367),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
roundRug.addComponentOrReplace(transform54)
const gltfShape8 = new GLTFShape("models/Carpet_01/Carpet_01.glb")
gltfShape8.withCollisions = true
gltfShape8.isPointerBlocker = true
gltfShape8.visible = true
roundRug.addComponentOrReplace(gltfShape8)

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
script1.init(options)
script2.init(options)
script3.init(options)
script4.init(options)
script5.init(options)
script6.init(options)
script1.spawn(verticalBluePad, {"distance":4,"speed":5,"autoStart":true,"onReachEnd":[{"entityName":"verticalBluePad","actionId":"goToStart","values":{}}],"onReachStart":[{"entityName":"verticalBluePad","actionId":"goToEnd","values":{}}]}, createChannel(channelId, verticalBluePad, channelBus))
script2.spawn(nftPictureFrame, {"id":"22517697188193012886809958570219377889657731125293874382192930970925383392043","contract":"0x2a187453064356c898cae034eaed119e1663acb8","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame, channelBus))
script3.spawn(imageFromURL, {"image":"https://i.imgur.com/leVbVto.jpg"}, createChannel(channelId, imageFromURL, channelBus))
script4.spawn(plainText, {"text":"NFT & Art ","font":"SF_Heavy","color":"#FFFFFF"}, createChannel(channelId, plainText, channelBus))
script5.spawn(externalLink, {"url":"https://thehollowcircle.bandcamp.com","name":"Listen on Bandcamp"}, createChannel(channelId, externalLink, channelBus))
script3.spawn(imageFromURL2, {"image":"https://i.imgur.com/0wItRbt.png"}, createChannel(channelId, imageFromURL2, channelBus))
script3.spawn(imageFromURL3, {"image":"https://i.imgur.com/zTggJtD.png"}, createChannel(channelId, imageFromURL3, channelBus))
script5.spawn(externalLink2, {"url":"https://associazioneculturadigitale.org/","name":"Italian Crypto Association"}, createChannel(channelId, externalLink2, channelBus))
script5.spawn(externalLink3, {"url":"https://crowdmine.it/en/","name":"Crowdmine.it"}, createChannel(channelId, externalLink3, channelBus))
script3.spawn(imageFromURL4, {"image":"https://i.imgur.com/Iwx6yEJ.jpg"}, createChannel(channelId, imageFromURL4, channelBus))
script6.spawn(instagramButtonLink, {"url":"stradedicorallo","bnw":false,"name":"Visit Instagram"}, createChannel(channelId, instagramButtonLink, channelBus))
script3.spawn(imageFromURL5, {"image":"https://i.imgur.com/UFbRDXn.jpg"}, createChannel(channelId, imageFromURL5, channelBus))
script4.spawn(plainText2, {"text":"Contact @Andrew0 for renting or events","font":"SF_Heavy","color":"#000000"}, createChannel(channelId, plainText2, channelBus))
script4.spawn(plainText3, {"text":"Decentraland Name for Sale","font":"SF","color":"#000000"}, createChannel(channelId, plainText3, channelBus))
script2.spawn(nftPictureFrame2, {"id":"124102","contract":"0x60f80121c31a0d46b5279700f9df786054aa5ee5","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame2, channelBus))
script2.spawn(nftPictureFrame3, {"id":"124361","contract":"0x60f80121c31a0d46b5279700f9df786054aa5ee5","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame3, channelBus))
script4.spawn(plainText4, {"text":"NFT Art for Sale","font":"SF_Heavy","color":"#000000"}, createChannel(channelId, plainText4, channelBus))
script4.spawn(plainText5, {"text":"Crypto Culture","font":"SF_Heavy","color":"#FFFFFF"}, createChannel(channelId, plainText5, channelBus))
script4.spawn(plainText6, {"text":"Digital Exhibitio","font":"SF_Heavy","color":"#FFFFFF"}, createChannel(channelId, plainText6, channelBus))
script3.spawn(imageFromURL6, {"image":"https://i.imgur.com/ogaSCaJ.jpg"}, createChannel(channelId, imageFromURL6, channelBus))
script3.spawn(imageFromURL7, {"image":"https://i.imgur.com/0JMCpBC.jpg"}, createChannel(channelId, imageFromURL7, channelBus))
script6.spawn(instagramButtonLink2, {"url":"a_ndrew_o","bnw":false,"name":"Visit Instagram"}, createChannel(channelId, instagramButtonLink2, channelBus))
script3.spawn(imageFromURL8, {"image":"https://i.imgur.com/tzyyotJ.jpg"}, createChannel(channelId, imageFromURL8, channelBus))
script4.spawn(plainText7, {"text":"Digital Music and Figurative Art","font":"SF_Heavy","color":"#FFFFFF"}, createChannel(channelId, plainText7, channelBus))
script5.spawn(externalLink4, {"url":"https://dharmafire.bandcamp.com","name":"Listen on Bandcamp"}, createChannel(channelId, externalLink4, channelBus))
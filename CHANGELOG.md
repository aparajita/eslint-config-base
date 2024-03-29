# Changelog

All notable changes to this project will be documented in this file. See [commit-and-tag-version](https://github.com/absolute-version/commit-and-tag-version) for commit guidelines.

## [1.1.6](https://github.com/aparajita/eslint-config-base/compare/v1.1.5...v1.1.6) (2023-09-30)


### Maintenance

* update deps, no prettier plugin, format ([6dcdd3a](https://github.com/aparajita/eslint-config-base/commit/6dcdd3a4453b1df609454c4e9b3e145e70d658b0))

### [1.1.5](https://github.com/aparajita/eslint-config-base/compare/v1.1.4...v1.1.5) (2022-07-24)


### Bug Fixes

* allow namespace import from package.json ([0bfeaf5](https://github.com/aparajita/eslint-config-base/commit/0bfeaf55c21b0db948abf65ad668188a56ac111f))

### [1.1.4](https://github.com/aparajita/eslint-config-base/compare/v1.1.3...v1.1.4) (2022-07-10)


### Bug Fixes

* allow members with leading underscore ([1ec7eec](https://github.com/aparajita/eslint-config-base/commit/1ec7eeca3703ffc3bf440828a1a0765f86bb3319))

### [1.1.3](https://github.com/aparajita/eslint-config-base/compare/v1.1.2...v1.1.3) (2022-07-09)


### Bug Fixes

* no function use-before-define ([f0369e6](https://github.com/aparajita/eslint-config-base/commit/f0369e6687f1d8a4dc612ede8b1b458c5888dfe9))


### Maintenance

* nicer checkmarks ([d7504f6](https://github.com/aparajita/eslint-config-base/commit/d7504f6c05b7357f055f4d037b08e065c707389b))
* update release scripts ([8380304](https://github.com/aparajita/eslint-config-base/commit/8380304900b8d4e97e6d3c486a7e9762b1627f3a))

### [1.1.2](https://github.com/aparajita/eslint-config-base/compare/v1.1.1...v1.1.2) (2022-06-30)


### Bug Fixes

* add more import extensions ([3a6eb36](https://github.com/aparajita/eslint-config-base/commit/3a6eb36e413bef1b693e76a517740cd8e8262ab2))


### Maintenance

* add tsconfigRootDir to be safe ([c603886](https://github.com/aparajita/eslint-config-base/commit/c603886a3d05af44a1e0995c2b2139d387ab5c53))

### [1.1.1](https://github.com/aparajita/eslint-config-base/compare/v1.1.0...v1.1.1) (2022-06-29)


### Bug Fixes

* tsconfig path ([6d85e17](https://github.com/aparajita/eslint-config-base/commit/6d85e1753111a7aea9c0eb884379ad2f61349b06))

## [1.1.0](https://github.com/aparajita/eslint-config-base/compare/v1.0.0...v1.1.0) (2022-06-28)


### Features

* prettier is kept separate, as it should be ([45e9840](https://github.com/aparajita/eslint-config-base/commit/45e984003cd721d8865bec2f806e62d87ebe0296))


### Bug Fixes

* don’t check/format these ([378cc2f](https://github.com/aparajita/eslint-config-base/commit/378cc2ff28434065c3b43f70d9b2558bf008b74a))
* have to include prettier in extends ([f821147](https://github.com/aparajita/eslint-config-base/commit/f821147f5b6fdb67a74017729ca979b33fa38044))


### Maintenance

* add missing fields ([a5e5e59](https://github.com/aparajita/eslint-config-base/commit/a5e5e596231756d695a5902158202a16b3f615fc))
* add test files ([82a79e9](https://github.com/aparajita/eslint-config-base/commit/82a79e9708946e0755168ed31a449cab67ed0b42))
* docs ([d577dda](https://github.com/aparajita/eslint-config-base/commit/d577ddaba7dfc55f70670a491dde644cb5f3608e))
* don’t commit .idea ([9dad6bb](https://github.com/aparajita/eslint-config-base/commit/9dad6bbcf2b7dd6e6fe17fc13133ec577fc42209))
* move prettier shared config to package.json ([9d11e80](https://github.com/aparajita/eslint-config-base/commit/9d11e8039f6a2ab077a8d93cc8abecf05f44eefe))
* ran prettier ([7ed9fa8](https://github.com/aparajita/eslint-config-base/commit/7ed9fa888999dbb0a234508fae1c9f42940505e7))
* remove useless path segment ([74d76de](https://github.com/aparajita/eslint-config-base/commit/74d76de1e2212142ba0afa43f31a2720751a840c))
* reorg ([ca34c10](https://github.com/aparajita/eslint-config-base/commit/ca34c10950db1e4e2532261bfd90200ffae71af3))
* update deps ([98f7c03](https://github.com/aparajita/eslint-config-base/commit/98f7c03a39bc3373bf256c8955e71b51e2125809))

## 1.0.0 (2022-06-27)


### Features

* add more filenames ([9bd2d9f](https://github.com/aparajita/eslint-config-base/commit/9bd2d9f61b2fa43dc854633b1179694370dd064a))
* take a guess at tsconfig location ([d50a4dd](https://github.com/aparajita/eslint-config-base/commit/d50a4dd80fcefd4bd08cfef3c46138ff90d6a5a0))


### Bug Fixes

* add missing deps ([d8e8339](https://github.com/aparajita/eslint-config-base/commit/d8e83398fbdf804cfbe6bd22048d8ed0de2a5a9a))
* enforce no use of ts-ignore ([2b71971](https://github.com/aparajita/eslint-config-base/commit/2b7197149827b195f7aa7d323b963caaf641ffd1))
* eslint ignores this by default ([84a6782](https://github.com/aparajita/eslint-config-base/commit/84a678281e06105832260e96b3b23343701a2c1e))


### Maintenance

* doc tweak ([0d2d795](https://github.com/aparajita/eslint-config-base/commit/0d2d7958582edc634590a8a1c3cd4a4b537dcd91))
* don’t forget prettier ([557f1a6](https://github.com/aparajita/eslint-config-base/commit/557f1a6b8a1e8d41d8abdf4c2a2fe0adea4da1fd))
* initial commit ([296ab66](https://github.com/aparajita/eslint-config-base/commit/296ab66b004348df7b86fb19a78cfaa72a990552))
* make publish a separate step, just in case ([8c9d73e](https://github.com/aparajita/eslint-config-base/commit/8c9d73e756df64472052afc1b5d42897bbca03ea))
* no need not to install this ([a248cca](https://github.com/aparajita/eslint-config-base/commit/a248cca5ae8cc64accf73334460c970113d625c9))
* update docs ([26f5ab6](https://github.com/aparajita/eslint-config-base/commit/26f5ab6fdced5e2c26ec306e3ac34a72d861831c))
* use my prettier config ([832b588](https://github.com/aparajita/eslint-config-base/commit/832b588364fc1903097176d740567625198e95b3))

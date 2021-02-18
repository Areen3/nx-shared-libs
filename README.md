# nx-shared-libs

example of import no publishable library into publishable libary
build:
nx build af-tools-lib-test

it strange because importing these libs works:
import { afToolsLibTestShared, IModelTestShared } from '@af/lib-test-shared';
import { afToolsLibTestShared2 } from '@af/lib-test-shared2';

you have errors:
Compiling TypeScript files for library af-tools-lib-test...
libs/af/shared/lib-test-shared3/src/index.ts:1:15 - error TS6059: File 'E:/temp/no-publish-libs/test-publish/libs/af/shared/lib-test-shared3/src/lib/af-tools-lib-test-shared.ts' is not under 'rootDir' 'libs/af/tools/lib-test'. 'rootDir' is expected to contain all source files.

1 export * from './lib/af-tools-lib-test-shared';
                ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
libs/af/tools/lib-test/src/lib/af-tools-lib-test.ts:4:39 - error TS6059: File 'E:/temp/no-publish-libs/test-publish/libs/af/shared/lib-test-shared3/src/index.ts' is not under 'rootDir' 'libs/af/tools/lib-test'. 'rootDir' is expected to contain all source files.

4 import { afToolsLibTestShared3 } from '@af/lib-test-shared3';
                                        ~~~~~~~~~~~~~~~~~~~~~~

Copying asset files...


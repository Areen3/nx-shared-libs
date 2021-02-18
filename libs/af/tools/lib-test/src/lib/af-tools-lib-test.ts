/* eslint-disable @nrwl/nx/enforce-module-boundaries,no-console */
import { afToolsLibTestShared, IModelTestShared } from '@af/lib-test-shared';
import { afToolsLibTestShared2 } from '@af/lib-test-shared2';
import { afToolsLibTestShared3 } from '@af/lib-test-shared3';

// import { ECompositModelEnum } from '@af/lib-shared-common';
// import { afSharedLibTestShared2 } from '@af/lib-test-shared2';

// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries

export function afToolsLibTest(): string {
  // import ok
  console.log(afToolsLibTestShared());
  // console.log(afSharedLibTestShared2());
  // console.log(ECompositModelEnum.cmGroup);
  // import ok
  console.log(afToolsLibTestShared2());
  // import powoduje błąd bo projekt shared3 nie jest w tym samym zbiorczym katalogu
  console.log(afToolsLibTestShared3());
  const mod: IModelTestShared = { data: 'aaa' };
  console.log(mod.data);
  return 'af-tools-lib-test';
}

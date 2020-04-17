import { LabIcon } from '@jupyterlab/ui-components';

// icon svg import statements
import addSvg from '../../style/images/move-file-up.svg';
import deletionsMadeSvg from '../../style/images/deletions-made-icon.svg';
import diffSvg from '../../style/images/diff-hover.svg';
import discardSvg from '../../style/images/discard.svg';
import gitSvg from '../../style/images/git-icon.svg';
import insertionsMadeSvg from '../../style/images/insertions-made-icon.svg';
import removeSvg from '../../style/images/move-file-down.svg';
import rewindSvg from '../../style/images/rewind.svg';

export const gitIcon = new LabIcon({ name: 'git', svgstr: gitSvg });

export const addIcon = new LabIcon({
  name: 'git-add',
  svgstr: addSvg
});

export const deletionsMadeIcon = new LabIcon({
  name: 'git-deletionsMade',
  svgstr: deletionsMadeSvg
});

export const diffIcon = new LabIcon({
  name: 'git-diff',
  svgstr: diffSvg
});

export const discardIcon = new LabIcon({
  name: 'git-discard',
  svgstr: discardSvg
});

export const insertionsMadeIcon = new LabIcon({
  name: 'git-insertionsMade',
  svgstr: insertionsMadeSvg
});

export const removeIcon = new LabIcon({
  name: 'git-remove',
  svgstr: removeSvg
});

export const rewindIcon = new LabIcon({
  name: 'git-rewind',
  svgstr: rewindSvg
});

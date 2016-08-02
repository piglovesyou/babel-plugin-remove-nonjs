import {extname} from 'path';

export default ({types: t}) => {
  return {
    visitor: {
      CallExpression(path) {
        if (!t.isIdentifier(path.node.callee, {name: "require"})) return;
        const arg = path.node.arguments[0].value;
        const ext = extname(arg).toLowerCase();
        if (!ext || ext === '.js') return;
        // TODO: Replace with a commented out node instead.
        if (path.parentPath.type === 'VariableDeclarator') {
          console.warn(`babel-plugin-remove-nonjs does not assume variable assignment from "require("${arg}")". Your program has been possibly broken since the variable "${path.parentPath.node.id.name}" was erased by us.`);
          path.parentPath.remove();
        } else {
          path.remove();
        }
      },
    }
  };
}

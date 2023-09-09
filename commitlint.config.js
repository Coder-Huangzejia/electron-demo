/**
 * commit 格式：type(scope?): subject
 * 注意，是英文逗号
 * eg:
 *   fix(world list): 未刷新页面数据
 *   update(permission): 添加 xxx 权限
 *   fix: 未刷新页面数据
 * 错误的提交信息：
 *   fix: 12345   // 少于6个字
 *   fi: 123456   // type 错误
 *   fix(camelCase): 123456 // scope 格式错误
 *
 */
module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
        // "subject-min-length": [2, "always", 6],
        'subject-case': [0],
        'type-enum': [
            2,
            'always',
            [
                'feat', // 新功能、新特性
                'fix', // 修改 bug
                'perf', // 更改代码，以提高性能（在不影响代码内部行为的前提下，对程序性能进行优化）
                'refactor', // 代码重构（重构，在不影响代码内部行为、功能下的代码修改）
                'docs', // 文档修改
                'style', // 代码格式修改, 注意不是 css 修改（例如分号修改）
                'test', // 测试用例新增、修改
                'build', // 影响项目构建或依赖项修改
                'revert', // 恢复上一次提交
                'ci', // 持续集成相关文件修改
                'chore', // 其他修改（不在上述类型中的修改）
                'release', // 发布新版本
                'workflow', // 工作流相关文件修改
            ],
        ],
    },
};

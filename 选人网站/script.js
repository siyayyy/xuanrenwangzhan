document.addEventListener('DOMContentLoaded', function() {
    const groupBtns = document.querySelectorAll('.group-btn');
    const currentGroup = document.querySelector('.current-group');
    const result = document.querySelector('.result');
    const drawBtn = document.querySelector('.draw-btn');
    const drawCount = document.getElementById('draw-count');
    const lastResult = document.getElementById('last-result');
    
    let selectedGroup = 'student';
    let count = 0;
    
    // 老师名单
    const teachers = ['王老师', '罗老师', '朱老师', '许老师'];
    
    // 学生名单
    const students = [
        '闫佳轩', '孙鹏宇', '周重志', '潘曼华', '郭冠多',
        '李金浪', '龙姣华', '何贞贤', '黎思雅', '徐婉晴',
        '魏圣卓', '肖楠', '谭雨欣', '李星瑶', '阚鑫宇',
        '吴钰妍', '王宇', '刘馨语', '张雨菲', '陈佳丽',
        '蒋雯丽', '邓琴', '孟少剑', '卢明龙', '肖佳宜',
        '梁燕莉', '樊帅辰', '胡家靖', '王梦萩', '余春',
        '许鑫楠', '陶然', '陈熙恒', '赵佳怡', '任佳佳',
        '马梓棋', '牟雅菲', '李雨红', '方萍', '漆宇',
        '朱茵琪', '张祥健', '陈茜贝', '贺丽娟', '袁佳宇',
        '魏煜涵'
    ];
    
    // 切换组
    groupBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // 移除所有按钮的active类
            groupBtns.forEach(b => b.classList.remove('active'));
            // 添加当前按钮的active类
            this.classList.add('active');
            
            selectedGroup = this.dataset.group;
            
            if (selectedGroup === 'student') {
                currentGroup.textContent = '当前选择：学生组（名字）';
            } else {
                currentGroup.textContent = '当前选择：老师组（王老师、罗老师、朱老师、许老师）';
            }
            
            result.textContent = '点击开始抽取';
        });
    });
    
    // 抽取按钮
    drawBtn.addEventListener('click', function() {
        // 添加按钮动画
        drawBtn.classList.add('spinning');
        
        // 模拟抽取过程
        let animationCount = 0;
        const maxAnimation = 15;
        
        const animationInterval = setInterval(() => {
            let tempValue;
            
            if (selectedGroup === 'student') {
                // 从学生名单中随机选择
                tempValue = students[Math.floor(Math.random() * students.length)];
            } else {
                // 从老师名单中随机选择
                tempValue = teachers[Math.floor(Math.random() * teachers.length)];
            }
            
            result.textContent = tempValue;
            result.classList.add('animate');
            
            setTimeout(() => {
                result.classList.remove('animate');
            }, 50);
            
            animationCount++;
            
            if (animationCount >= maxAnimation) {
                clearInterval(animationInterval);
                
                // 计算最终结果
                let resultValue;
                if (selectedGroup === 'student') {
                    resultValue = students[Math.floor(Math.random() * students.length)];
                } else {
                    resultValue = teachers[Math.floor(Math.random() * teachers.length)];
                }
                
                // 显示最终结果
                result.textContent = resultValue;
                result.classList.add('animate');
                
                // 更新统计信息
                count++;
                drawCount.textContent = count;
                lastResult.textContent = resultValue;
                
                // 移除按钮动画
                setTimeout(() => {
                    drawBtn.classList.remove('spinning');
                    result.classList.remove('animate');
                }, 500);
            }
        }, 80);
    });
});
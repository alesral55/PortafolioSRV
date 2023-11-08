function createSkillProgressBar(container, percentage, skillName) {
    const bar = new ProgressBar.SemiCircle(container, {
        strokeWidth: 8,
        color: '#fff',
        trailColor: '#eee',
        trailWidth: 1,
        easing: 'easeInOut',
        duration: 1400,
        svgStyle: null,
        colortexto:'#fff',
        text: {
            value: '',
            alignToBottom: false,
        },
        from: { color: '#fff' },
        to: { color: '#B71C1C' },
        step: (state, bar) => {
            bar.path.setAttribute('stroke', state.color);
            const value = Math.round(bar.value() * 100);
            if (value === 0) {
                bar.setText('');
            } else {
                bar.setText(skillName + ' ' + value + '%');
                bar.text.style.margin = '20px auto';
            }
            bar.text.style.color = state.colortexto;
        },
    });
    bar.animate(percentage);
}

const container1 = document.getElementById('SQL');
createSkillProgressBar(container1, 0.75, 'SQL');

const container2 = document.getElementById('C++');
createSkillProgressBar(container2, 0.70, 'C++');

const container3 = document.getElementById('C#');
createSkillProgressBar(container3, 0.75, 'C#');

const container4 = document.getElementById('JAVA');
createSkillProgressBar(container4, 0.68, 'Java');

const container5 = document.getElementById('JAVAS');
createSkillProgressBar(container5, 0.85, 'JavaScript');

const container6 = document.getElementById('HTML');
createSkillProgressBar(container6, 0.9, 'HTML');

const container7 = document.getElementById('CSS');
createSkillProgressBar(container7, 0.78, 'CSS');

const container8 = document.getElementById('BOOTS');
createSkillProgressBar(container8, 0.7, 'Bootstrap');

const container9 = document.getElementById('.NET');
createSkillProgressBar(container9, 0.8, '.NET');

const container10 = document.getElementById('AS');
createSkillProgressBar(container10, 0.7, 'Android Studio');

const container11 = document.getElementById('NODE');
createSkillProgressBar(container11, 0.6, 'Node Js');

const container12 = document.getElementById('MONGO');
createSkillProgressBar(container12, 0.55, 'Mongo DB');


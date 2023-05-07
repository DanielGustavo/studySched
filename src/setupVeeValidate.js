import { configure, defineRule } from 'vee-validate';
import allRules from '@vee-validate/rules';

configure({
  generateMessage: (context) => {
    const ruleToMessage = {
      required: 'This field is empty',
    };

    const message =
      ruleToMessage[context?.rule.name] ?? 'This field is invalid';

    return message;
  },
});

Object.keys(allRules).forEach((ruleId) => {
  defineRule(ruleId, allRules[ruleId]);
});

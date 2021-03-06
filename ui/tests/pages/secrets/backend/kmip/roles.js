import { create, clickable, fillable, visitable } from 'ember-cli-page-object';
import ListView from 'vault/tests/pages/components/list-view';

export default create({
  ...ListView,
  visit: visitable('/vault/secrets/:backend/kmip/scopes/:scope/roles'),
  visitDetail: visitable('/vault/secrets/:backend/kmip/scopes/:scope/roles/:role'),
  create: clickable('[data-test-role-create]'),
  roleName: fillable('[data-test-input="name"]'),
  submit: clickable('[data-test-edit-form-submit]'),
  detailDelete: clickable('[data-test-popup-menu-trigger]'),
  detailEditLink: clickable('[data-test-kmip-link-edit-role]'),
  cancelLink: clickable('[data-test-edit-form-cancel]'),
});

import emptyObject from 'fbjs/lib/emptyObject';
import invariant from "fbjs/lib/invariant";
import {createElement, getHostContextNode} from '../utils/createElement.js';
import config from '../config.js';

const Reconciler = require('react-reconciler')

const CanvasRenderer = Reconciler({
    appendInitialChild (parentInstance, child) {
        if (parentInstance.appendChild) {
            parentInstance.appendChild(child);
        } else {
            parentInstance.canvas = child;
        }
    },
    createInstance (type, props, internalInstanceHandle) {
        return createElement(type, props);
    },
    createTextInstance (text, rootContainerInstance, internalInstanceHandle) {
        // invariant(false, "ReactCanvasFiber does not support text instances. Use Text component instead.");
        return text;
    },
    finalizeInitialChildren (canvasElement, type, props) {
        return false;
    },
    getPublicInstance (inst) {
        return inst;
    },
    prepareForCommit () {
        // noop
    },
    prepareUpdate (canvasElement, type, oldProps, newProps) {
        return true;
    },
    resetAfterCommit () {
        // noop
    },
    resetTextContent (canvasElement) {
        // noop
    },
    getRootHostContext (instance) {
        return getHostContextNode(instance);
    },
    getChildHostContext (instance) {
        return emptyObject;
    },
    shouldSetTextContent (type, props) {
        return false;
    },
    now: () => {},
    useSyncScheduling: true,

    mutation: {
        appendChild(parentInstance, child) {
          if (parentInstance.appendChild) {
            parentInstance.appendChild(child);
          } else {
            parentInstance.canvas = child;
          }
        },

        appendChildToContainer(parentInstance, child) {
          if (parentInstance.appendChild) {
            parentInstance.appendChild(child);
          } else {
            parentInstance.canvas = child;
          }
        },
        
        removeChild(parentInstance, child) {
          parentInstance.removeChild(child);
        },

        removeChildFromContainer(parentInstance, child) {
          parentInstance.removeChild(child);
        },
      
        insertBefore(parentInstance, child, beforeChild) {
          // noob
        },
      
        commitUpdate(instance, updatePayload, type, oldProps, newProps) {
          // noop
          if (config.types.image === type) {
                instance.props = newProps;
                instance.render();
          }
        },
      
        commitMount(instance, updatePayload, type, oldProps, newProps) {
          // noop
        },
      
        commitTextUpdate(textInstance, oldText, newText) {
          textInstance.children = newText;
        }
    }
});

export default CanvasRenderer;
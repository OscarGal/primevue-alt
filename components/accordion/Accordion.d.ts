/**
 *
 * Accordion groups a collection of contents in tabs.
 *
 * [Live Demo](https://www.primevue.org/accordion/)
 *
 * @module accordion
 *
 */
import { VNode } from 'vue';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

/**
 * Custom tab open event.
 * @see {@link AccordionEmits.tab-open}
 */
export interface AccordionTabOpenEvent {
    /**
     * Browser mouse event.
     * @type {MouseEvent}
     */
    originalEvent: MouseEvent;
    /**
     * Opened tab index.
     */
    index: number;
}

/**
 * Custom tab close event.
 * @see {@link AccordionEmits.tab-close}
 * @extends {AccordionTabOpenEvent}
 */
export interface AccordionTabCloseEvent extends AccordionTabOpenEvent {}

/**
 * Custom tab open event.
 * @see {@link AccordionEmits.tab-open}
 * @extends AccordionTabOpenEvent
 */
export interface AccordionClickEvent extends AccordionTabOpenEvent {}

/**
 * Defines valid properties in Accordion component.
 */
export interface AccordionProps {
    /**
     * When enabled, multiple tabs can be activated at the same time.
     * @defaultValue false
     */
    multiple?: boolean | undefined;
    /**
     * Index of the active tab or an array of indexes in multiple mode.
     * @defaultValue null
     */
    activeIndex?: number | number[] | null | undefined;
    /**
     * When enabled, hidden tabs are not rendered at all. Defaults to false that hides tabs with css.
     * @defaultValue false
     */
    lazy?: boolean | undefined;
    /**
     * Icon of a collapsed tab.
     * @defaultValue 'pi pi-chevron-right'
     */
    expandIcon?: string | undefined;
    /**
     * Icon of an expanded tab.
     * @defaultValue 'pi pi-chevron-down'
     */
    collapseIcon?: string | undefined;
    /**
     * Index of the element in tabbing order.
     * @defaultValue 0
     */
    tabindex?: number | undefined;
    /**
     * When enabled, the focused tab is activated.
     * @defaultValue false
     */
    selectOnFocus?: boolean | undefined;
}

/**
 * Defines valid slots in Accordion slots.
 */
export interface AccordionSlots {
    /**
     * Default slot to detect AccordionTab components.
     */
    default(): VNode[];
}

/**
 * Defines valid emits in Accordion component.
 */
export interface AccordionEmits {
    /**
     * Emitted when the active tab changes.
     * @param {number | undefined} value - Index of new active tab.
     */
    'update:activeIndex'(value: number | undefined): void;
    /**
     * Callback to invoke when a tab gets expanded.
     * @param {AccordionTabOpenEvent} event - Custom tab open event.
     */
    'tab-open'(event: AccordionTabOpenEvent): void;
    /**
     * Callback to invoke when an active tab is collapsed by clicking on the header.
     * @param {AccordionTabCloseEvent} event - Custom tab close event.
     */
    'tab-close'(event: AccordionTabCloseEvent): void;
    /**
     * Callback to invoke when an active tab is clicked.
     * @param {AccordionClickEvent} event - Custom tab click event.
     */
    'tab-click'(event: AccordionClickEvent): void;
}

/**
 * **PrimeVue - Accordion**
 *
 * _Accordion groups a collection of contents in tabs._
 *
 * [Live Demo](https://www.primevue.org/accordion/)
 * --- ---
 * ![PrimeVue](https://primefaces.org/cdn/primevue/images/logo-100.png)
 *
 * @group Component
 *
 */
declare class Accordion extends ClassComponent<AccordionProps, AccordionSlots, AccordionEmits> {}

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        Accordion: GlobalComponentConstructor<Accordion>;
    }
}

export default Accordion;

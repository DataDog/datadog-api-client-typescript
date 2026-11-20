import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { NoteBackendDefinitionTextAlign } from "./NoteBackendDefinitionTextAlign";
import { NoteBackendDefinitionTickEdge } from "./NoteBackendDefinitionTickEdge";
import { NoteBackendDefinitionType } from "./NoteBackendDefinitionType";
import { NoteBackendDefinitionVerticalAlign } from "./NoteBackendDefinitionVerticalAlign";
import { WidgetTextAlign } from "./WidgetTextAlign";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class NoteBackendDefinition {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "backgroundColor"?: string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "content": string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "description"?: string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "fontSize"?: string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "hasPadding"?: boolean;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "notes"?: string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "showTick"?: boolean;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "textAlign"?: NoteBackendDefinitionTextAlign;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "tickEdge"?: NoteBackendDefinitionTickEdge;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "tickPos"?: string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "title"?: string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "titleAlign"?: WidgetTextAlign;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "titleSize"?: string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "type": NoteBackendDefinitionType;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "verticalAlign"?: NoteBackendDefinitionVerticalAlign;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    backgroundColor: {
      baseName: "background_color",
      type: "string",
    },
    content: {
      baseName: "content",
      type: "string",
      required: true,
    },
    description: {
      baseName: "description",
      type: "string",
    },
    fontSize: {
      baseName: "font_size",
      type: "string",
    },
    hasPadding: {
      baseName: "has_padding",
      type: "boolean",
    },
    notes: {
      baseName: "notes",
      type: "string",
    },
    showTick: {
      baseName: "show_tick",
      type: "boolean",
    },
    textAlign: {
      baseName: "text_align",
      type: "NoteBackendDefinitionTextAlign",
    },
    tickEdge: {
      baseName: "tick_edge",
      type: "NoteBackendDefinitionTickEdge",
    },
    tickPos: {
      baseName: "tick_pos",
      type: "string",
    },
    title: {
      baseName: "title",
      type: "string",
    },
    titleAlign: {
      baseName: "title_align",
      type: "WidgetTextAlign",
    },
    titleSize: {
      baseName: "title_size",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "NoteBackendDefinitionType",
      required: true,
    },
    verticalAlign: {
      baseName: "vertical_align",
      type: "NoteBackendDefinitionVerticalAlign",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return NoteBackendDefinition.attributeTypeMap;
  }

  public constructor() {}
}

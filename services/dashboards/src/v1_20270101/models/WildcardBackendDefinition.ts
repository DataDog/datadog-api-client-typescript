import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { WidgetCustomLink } from "./WidgetCustomLink";
import { WidgetTextAlign } from "./WidgetTextAlign";
import { WidgetTime } from "./WidgetTime";
import { WildcardBackendDefinitionSpecification } from "./WildcardBackendDefinitionSpecification";
import { WildcardBackendDefinitionType } from "./WildcardBackendDefinitionType";
import { WildcardTileDefRequest } from "./WildcardTileDefRequest";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class WildcardBackendDefinition {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "customLinks"?: Array<WidgetCustomLink>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "description"?: string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "notes"?: string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "requests": Array<WildcardTileDefRequest>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "specification": WildcardBackendDefinitionSpecification;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "time"?: WidgetTime;
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
  "type": WildcardBackendDefinitionType;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    customLinks: {
      baseName: "custom_links",
      type: "Array<WidgetCustomLink>",
    },
    description: {
      baseName: "description",
      type: "string",
    },
    notes: {
      baseName: "notes",
      type: "string",
    },
    requests: {
      baseName: "requests",
      type: "Array<WildcardTileDefRequest>",
      required: true,
    },
    specification: {
      baseName: "specification",
      type: "WildcardBackendDefinitionSpecification",
      required: true,
    },
    time: {
      baseName: "time",
      type: "WidgetTime",
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
      type: "WildcardBackendDefinitionType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return WildcardBackendDefinition.attributeTypeMap;
  }

  public constructor() {}
}

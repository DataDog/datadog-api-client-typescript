import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ChangeEventAttributesAuthor } from "./ChangeEventAttributesAuthor";
import { ChangeEventAttributesChangedResource } from "./ChangeEventAttributesChangedResource";
import { ChangeEventAttributesImpactedResourcesItem } from "./ChangeEventAttributesImpactedResourcesItem";
import { EventSystemAttributes } from "./EventSystemAttributes";

/**
 * Change event attributes.
 */
export class ChangeEventAttributes {
  /**
   * Aggregation key of the event.
   */
  "aggregationKey"?: string;
  /**
   * The entity that made the change.
   */
  "author"?: ChangeEventAttributesAuthor;
  /**
   * JSON object of change metadata.
   */
  "changeMetadata"?: any;
  /**
   * A uniquely identified resource.
   */
  "changedResource"?: ChangeEventAttributesChangedResource;
  /**
   * JSON object of event system attributes.
   */
  "evt"?: EventSystemAttributes;
  /**
   * A list of resources impacted by this change.
   */
  "impactedResources"?: Array<ChangeEventAttributesImpactedResourcesItem>;
  /**
   * The new state of the changed resource.
   */
  "newValue"?: any;
  /**
   * The previous state of the changed resource.
   */
  "prevValue"?: any;
  /**
   * Service that triggered the event.
   */
  "service"?: string;
  /**
   * POSIX timestamp of the event.
   */
  "timestamp"?: number;
  /**
   * The title of the event.
   */
  "title"?: string;
  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any };
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    aggregationKey: {
      baseName: "aggregation_key",
      type: "string",
    },
    author: {
      baseName: "author",
      type: "ChangeEventAttributesAuthor",
    },
    changeMetadata: {
      baseName: "change_metadata",
      type: "any",
    },
    changedResource: {
      baseName: "changed_resource",
      type: "ChangeEventAttributesChangedResource",
    },
    evt: {
      baseName: "evt",
      type: "EventSystemAttributes",
    },
    impactedResources: {
      baseName: "impacted_resources",
      type: "Array<ChangeEventAttributesImpactedResourcesItem>",
    },
    newValue: {
      baseName: "new_value",
      type: "any",
    },
    prevValue: {
      baseName: "prev_value",
      type: "any",
    },
    service: {
      baseName: "service",
      type: "string",
    },
    timestamp: {
      baseName: "timestamp",
      type: "number",
      format: "int64",
    },
    title: {
      baseName: "title",
      type: "string",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ChangeEventAttributes.attributeTypeMap;
  }

  public constructor() {}
}

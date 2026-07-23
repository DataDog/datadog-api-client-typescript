/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { DegradationTemplateDataAttributesComponentsAffectedItems } from "./DegradationTemplateDataAttributesComponentsAffectedItems";
import { DegradationTemplateDataAttributesUpdatesItems } from "./DegradationTemplateDataAttributesUpdatesItems";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The attributes of a degradation template.
 */
export class DegradationTemplateDataAttributes {
  /**
   * The components affected by a degradation created from this template.
   */
  "componentsAffected"?: Array<DegradationTemplateDataAttributesComponentsAffectedItems>;
  /**
   * Timestamp of when the degradation template was created.
   */
  "createdAt"?: Date;
  /**
   * The title used for a degradation created from this template.
   */
  "degradationTitle"?: string;
  /**
   * Timestamp of when the degradation template was last modified.
   */
  "modifiedAt"?: Date;
  /**
   * The name of the degradation template.
   */
  "name"?: string;
  /**
   * The pre-filled updates for a degradation created from this template.
   */
  "updates"?: Array<DegradationTemplateDataAttributesUpdatesItems>;

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
    componentsAffected: {
      baseName: "components_affected",
      type: "Array<DegradationTemplateDataAttributesComponentsAffectedItems>",
    },
    createdAt: {
      baseName: "created_at",
      type: "Date",
      format: "date-time",
    },
    degradationTitle: {
      baseName: "degradation_title",
      type: "string",
    },
    modifiedAt: {
      baseName: "modified_at",
      type: "Date",
      format: "date-time",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    updates: {
      baseName: "updates",
      type: "Array<DegradationTemplateDataAttributesUpdatesItems>",
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
    return DegradationTemplateDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}

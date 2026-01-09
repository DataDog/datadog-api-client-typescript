/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CreateDegradationRequestDataAttributesStatus } from "./CreateDegradationRequestDataAttributesStatus";
import { DegradationDataAttributesComponentsAffectedItems } from "./DegradationDataAttributesComponentsAffectedItems";
import { DegradationDataAttributesUpdatesItems } from "./DegradationDataAttributesUpdatesItems";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

export class DegradationDataAttributes {
  "componentsAffected"?: Array<DegradationDataAttributesComponentsAffectedItems>;
  "createdAt"?: Date;
  "description"?: string;
  "modifiedAt"?: Date;
  "status"?: CreateDegradationRequestDataAttributesStatus;
  "title"?: string;
  "updates"?: Array<DegradationDataAttributesUpdatesItems>;

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
      type: "Array<DegradationDataAttributesComponentsAffectedItems>",
    },
    createdAt: {
      baseName: "created_at",
      type: "Date",
      format: "date-time",
    },
    description: {
      baseName: "description",
      type: "string",
    },
    modifiedAt: {
      baseName: "modified_at",
      type: "Date",
      format: "date-time",
    },
    status: {
      baseName: "status",
      type: "CreateDegradationRequestDataAttributesStatus",
    },
    title: {
      baseName: "title",
      type: "string",
    },
    updates: {
      baseName: "updates",
      type: "Array<DegradationDataAttributesUpdatesItems>",
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
    return DegradationDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}

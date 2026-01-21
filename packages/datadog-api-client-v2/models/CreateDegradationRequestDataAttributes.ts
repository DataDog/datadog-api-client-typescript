/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CreateDegradationRequestDataAttributesComponentsAffectedItems } from "./CreateDegradationRequestDataAttributesComponentsAffectedItems";
import { CreateDegradationRequestDataAttributesStatus } from "./CreateDegradationRequestDataAttributesStatus";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The supported attributes for creating a degradation.
 */
export class CreateDegradationRequestDataAttributes {
  /**
   * The components affected by the degradation.
   */
  "componentsAffected": Array<CreateDegradationRequestDataAttributesComponentsAffectedItems>;
  /**
   * The description of the degradation.
   */
  "description"?: string;
  /**
   * The status of the degradation.
   */
  "status": CreateDegradationRequestDataAttributesStatus;
  /**
   * The title of the degradation.
   */
  "title": string;

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
      type: "Array<CreateDegradationRequestDataAttributesComponentsAffectedItems>",
      required: true,
    },
    description: {
      baseName: "description",
      type: "string",
    },
    status: {
      baseName: "status",
      type: "CreateDegradationRequestDataAttributesStatus",
      required: true,
    },
    title: {
      baseName: "title",
      type: "string",
      required: true,
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
    return CreateDegradationRequestDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}

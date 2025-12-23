/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { DORADeploymentObjectAttributes } from "./DORADeploymentObjectAttributes";
import { DORADeploymentType } from "./DORADeploymentType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A DORA deployment event.
 */
export class DORADeploymentObject {
  /**
   * The attributes of the deployment event.
   */
  "attributes"?: DORADeploymentObjectAttributes;
  /**
   * The ID of the deployment event.
   */
  "id"?: string;
  /**
   * JSON:API type for DORA deployment events.
   */
  "type"?: DORADeploymentType;

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
    attributes: {
      baseName: "attributes",
      type: "DORADeploymentObjectAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "DORADeploymentType",
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
    return DORADeploymentObject.attributeTypeMap;
  }

  public constructor() {}
}

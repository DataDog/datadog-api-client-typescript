/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { DeployAppResponseDataAttributes } from "./DeployAppResponseDataAttributes";
import { DeployAppResponseDataType } from "./DeployAppResponseDataType";
import { DeploymentMeta } from "./DeploymentMeta";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The definition of `DeployAppResponseData` object.
 */
export class DeployAppResponseData {
  /**
   * The definition of `DeployAppResponseDataAttributes` object.
   */
  "attributes"?: DeployAppResponseDataAttributes;
  /**
   * The `data` `id`.
   */
  "id"?: string;
  /**
   * The definition of `DeploymentMeta` object.
   */
  "meta"?: DeploymentMeta;
  /**
   * The definition of `DeployAppResponseDataType` object.
   */
  "type"?: DeployAppResponseDataType;

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
      type: "DeployAppResponseDataAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    meta: {
      baseName: "meta",
      type: "DeploymentMeta",
    },
    type: {
      baseName: "type",
      type: "DeployAppResponseDataType",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return DeployAppResponseData.attributeTypeMap;
  }

  public constructor() {}
}

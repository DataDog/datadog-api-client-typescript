/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { DeploymentMeta } from "./DeploymentMeta";
import { DisableAppResponseDataAttributes } from "./DisableAppResponseDataAttributes";
import { DisableAppResponseDataType } from "./DisableAppResponseDataType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The definition of `DisableAppResponseData` object.
 */
export class DisableAppResponseData {
  /**
   * The definition of `DisableAppResponseDataAttributes` object.
   */
  "attributes"?: DisableAppResponseDataAttributes;
  /**
   * The `data` `id`.
   */
  "id"?: string;
  /**
   * The definition of `DeploymentMeta` object.
   */
  "meta"?: DeploymentMeta;
  /**
   * The definition of `DisableAppResponseDataType` object.
   */
  "type"?: DisableAppResponseDataType;

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
      type: "DisableAppResponseDataAttributes",
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
      type: "DisableAppResponseDataType",
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
    return DisableAppResponseData.attributeTypeMap;
  }

  public constructor() {}
}

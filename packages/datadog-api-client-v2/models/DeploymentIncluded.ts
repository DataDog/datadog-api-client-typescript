/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { DeploymentIncludedAttributes } from "./DeploymentIncludedAttributes";
import { DeploymentIncludedMeta } from "./DeploymentIncludedMeta";
import { DeploymentIncludedType } from "./DeploymentIncludedType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The definition of `DeploymentIncluded` object.
 */
export class DeploymentIncluded {
  /**
   * The definition of `DeploymentIncludedAttributes` object.
   */
  "attributes"?: DeploymentIncludedAttributes;
  /**
   * The `DeploymentIncluded` `id`.
   */
  "id"?: string;
  /**
   * The definition of `DeploymentIncludedMeta` object.
   */
  "meta"?: DeploymentIncludedMeta;
  /**
   * The definition of `DeploymentIncludedType` object.
   */
  "type"?: DeploymentIncludedType;

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
      type: "DeploymentIncludedAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    meta: {
      baseName: "meta",
      type: "DeploymentIncludedMeta",
    },
    type: {
      baseName: "type",
      type: "DeploymentIncludedType",
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
    return DeploymentIncluded.attributeTypeMap;
  }

  public constructor() {}
}

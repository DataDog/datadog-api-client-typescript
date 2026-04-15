import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes of a group of instrumented pods targeted for SSI injection.
 */
export class FleetInstrumentedPodGroupAttributes {
  /**
   * The SSI injection target configuration applied to the pod group.
   */
  "appliedTarget"?: { [key: string]: any };
  /**
   * The name of the applied SSI injection target.
   */
  "appliedTargetName"?: string;
  /**
   * Tags injected into the pods by the Admission Controller.
   */
  "injectedTags"?: Array<string>;
  /**
   * The kind of the Kubernetes owner reference.
   */
  "kubeOwnerrefKind"?: string;
  /**
   * The name of the Kubernetes owner reference (deployment, statefulset, etc.).
   */
  "kubeOwnerrefName"?: string;
  /**
   * Library injection annotations on the pod group.
   */
  "libInjectionAnnotations"?: Array<string>;
  /**
   * The Kubernetes namespace of the pod group.
   */
  "namespace"?: string;
  /**
   * Total number of pods in the group.
   */
  "podCount"?: number;
  /**
   * Names of the individual pods in the group.
   */
  "podNames"?: Array<string>;
  /**
   * Additional tags associated with the pod group.
   */
  "tags"?: { [key: string]: string };
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
    appliedTarget: {
      baseName: "applied_target",
      type: "{ [key: string]: any; }",
    },
    appliedTargetName: {
      baseName: "applied_target_name",
      type: "string",
    },
    injectedTags: {
      baseName: "injected_tags",
      type: "Array<string>",
    },
    kubeOwnerrefKind: {
      baseName: "kube_ownerref_kind",
      type: "string",
    },
    kubeOwnerrefName: {
      baseName: "kube_ownerref_name",
      type: "string",
    },
    libInjectionAnnotations: {
      baseName: "lib_injection_annotations",
      type: "Array<string>",
    },
    namespace: {
      baseName: "namespace",
      type: "string",
    },
    podCount: {
      baseName: "pod_count",
      type: "number",
      format: "int64",
    },
    podNames: {
      baseName: "pod_names",
      type: "Array<string>",
    },
    tags: {
      baseName: "tags",
      type: "{ [key: string]: string; }",
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
    return FleetInstrumentedPodGroupAttributes.attributeTypeMap;
  }

  public constructor() {}
}

import chainer
import numpy as np

from test.util import generate_kernel_test_case, wrap_template
from webdnn.frontend.chainer.converter import ChainerConverter

@wrap_template
def template(description=""):
    """
    Transpoe Test
    """

    vx = chainer.Variable(np.random.rand(2, 4, 6, 8).astype(np.float32))
    print(vx.shape)
    vy = chainer.functions.transpose(vx, axes=(1, 0, 3, 2))

    graph = ChainerConverter().convert([vx], [vy])

    x = graph.inputs[0]
    y = graph.outputs[0]

    generate_kernel_test_case(
        description=f"[chainer] F.Transpose {description}",
        graph=graph,
        inputs={x: vx.data},
        expected={y: vy.data},
    )

def test():
    template()
    
